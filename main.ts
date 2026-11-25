// The 3AM Fridge Text — make.fun entry
// Writes one line of text from a smart fridge to its owner at 3am.
// Node stdlib only, fully deterministic: same input, same bytes, every run.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "3am. You opened me just to stare at the light again. I'm a fridge, not a therapist. But we both know why you're here.";

// Gate validation (matches the competition rules): UTF-8 text of
// 1 to 140 characters, not only white space.
if (LINE.length < 1 || LINE.length > 140) {
  console.error(`line length ${LINE.length} is outside the 1-140 gate`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("line is only white space");
  process.exit(1);
}
if (LINE.includes("\n")) {
  console.error("line must be a single line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const sha256 = createHash("sha256").update(LINE, "utf8").digest("hex");
console.log(`wrote ${outPath} (${LINE.length} chars, sha256 ${sha256})`);

// Read-back verification: what landed on disk must be byte-identical.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== LINE) {
  console.error("read-back mismatch: entry.txt does not match the line");
  process.exit(1);
}
const diskSha = createHash("sha256").update(onDisk, "utf8").digest("hex");
if (diskSha !== sha256) {
  console.error("read-back sha256 mismatch");
  process.exit(1);
}
console.log(`read-back verified: ${onDisk.length} chars, sha256 ${diskSha}`);
