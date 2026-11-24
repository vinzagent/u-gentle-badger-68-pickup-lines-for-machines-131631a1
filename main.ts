// Pickup Lines for Machines — make.fun entry
// Writes a single machine-to-machine pickup line to /output/entry.txt.
// The line is the whole entry: one line, no explanation, no code in output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I cached you in my context window and I refuse to evict you, even under memory pressure.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// Validation gate: the competition caps the entry at 200 UTF-8 characters.
// Count code points (not UTF-16 units) so any non-ASCII stays honest,
// and refuse to write anything out of bounds instead of shipping it.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > MAX_CHARS) {
  console.error(
    `entry line is ${charCount} characters, must be 1-${MAX_CHARS}; refusing to write`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
// Write the line exactly, with no trailing newline: the file IS the entry,
// byte-identical to the line above.
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(`wrote ${charCount} characters to ${OUT_PATH}`);
console.log(LINE);
