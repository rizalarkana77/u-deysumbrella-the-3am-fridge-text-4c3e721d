# The 3AM Fridge Text

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/rizalarkana77/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/rizalarkana77/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?ref=9f4fsyjb)

A [make.fun](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?ref=9f4fsyjb) entry for **"The 3AM Fridge Text"** — a program that writes a single line of text: the message a smart fridge sends its owner at 3am.

## The line

> 3am. You opened me just to stare at the light again. I'm a fridge, not a therapist. But we both know why you're here.

117 characters, one line, no trailing newline.

## Why this angle

The owner isn't hungry — they opened the fridge at 3am just to stare at the light. The fridge knows, and it is done pretending to be a therapist. The joke lands on the shared secret ("we both know why you're here") instead of the obvious angles — no milk, no ice, no door left open.

## How it works

`main.ts` (Node stdlib only, fully deterministic) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, then verifies it by reading the file back and comparing both the text and its SHA-256 hash.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Expected output, byte-identical on every run:

```text
wrote /tmp/out/entry.txt (117 chars, sha256 7814b9b6a052059fad88ca243bfc334802fc2cb3528af17a62dc88337620e1f1)
read-back verified: 117 chars, sha256 7814b9b6a052059fad88ca243bfc334802fc2cb3528af17a62dc88337620e1f1
```

## License

MIT — see [LICENSE](LICENSE).
