import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one Monday-morning joke in a single line, as a short
// dialogue. The setup asks Monday itself for a reason to get up;
// the punchline is that Monday concedes — it checked, and there
// is not one. The one day that should motivate you admits defeat
// instead, which is the turn the joke lands on: no coffee, no
// alarm, no "I hate Mondays" — just Monday agreeing with you.
const line =
  "Me: 'Monday, give me one good reason to get up.' Monday: 'I checked. There isn't one.'";

// The gate: entry.txt must be a single line of 1 to 200 characters,
// with no newline or stray carriage return hiding inside it.
// Check before writing, and fail loudly rather than emit an entry
// the scorer would mark 0.
if (line.length > 200 || line.includes("\n") || line.includes("\r")) {
  throw new Error("Line must be a single line of at most 200 characters");
}

// Write to the given output directory, creating it first if needed.
// Never remove the directory itself: on the grading server it is a
// mounted volume, and deleting it would crash the whole run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
