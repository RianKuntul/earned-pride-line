# One Line of Earned Pride

[![make.fun](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/c/u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/RianKuntul/earned-pride-line/rank.svg)](https://make.fun/c/u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/RianKuntul/earned-pride-line/reward.svg)](https://make.fun/c/u-mang-one-line-of-earned-pride-a0138557)

Entry for the make.fun competition **One Line of Earned Pride**
(`u-mang-one-line-of-earned-pride-a0138557`, $5, deadline 27 Nov 2026 11:15 WIB).

## What it does

`main.ts` (Node 22, readable TypeScript) writes a single line of text —
a quiet, earned moment of pride for someone in a concrete scene — to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
A read-back gate refuses anything outside 1–240 characters, anything
only whitespace, or anything more than one line.

## The line (v2)

> For a year he practised the same three chords after every shift, and tonight his granddaughter finally danced to his guitar in their tiny kitchen.

146 characters. A grandfather's year of quiet practice finally landing
in his granddaughter's first dance.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/earned-pride-out node main.ts
cat /tmp/earned-pride-out/entry.txt
```
