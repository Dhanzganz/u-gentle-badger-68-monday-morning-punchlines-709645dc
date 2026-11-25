# Monday Morning Punchlines

One joke about Monday mornings — told in a single line.

[![make.fun](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/Dhanzganz/u-gentle-badger-68-monday-morning-punchlines-709645dc/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/Dhanzganz/u-gentle-badger-68-monday-morning-punchlines-709645dc/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)

> Me: 'Monday, give me one good reason to get up.' Monday: 'I checked. There isn't one.'

The program writes this one line to `/output/entry.txt`.

## Why this joke

Most Monday jokes complain about Monday. This one makes Monday
concede: asked for a single good reason to get up, the day itself
checks and finds none. The twist is that the antagonist agrees with
you — no pep talk, no excuse, just honest defeat. It is about Monday
morning specifically, it lands in one reading, and it uses no tired
cliché: no coffee, no alarm clock, no "I hate Mondays".

## How it works

`main.ts` is a dependency-free Node program with no build step. It
holds the entry line, guards it against the competition gate (a single
line of 1–200 characters), and writes it to `entry.txt` inside the
output directory (`MAKEFUN_OUTPUT_DIR`, defaulting to `/output`). Run
it with any modern Node: the output is byte-for-byte identical every
time, and no trailing newline is added.
