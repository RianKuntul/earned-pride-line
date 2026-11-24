// One Line of Earned Pride — entry program (v2).
// v2 revision: a new scene and a new person. The v1 line followed a
// mother's long sacrifice landing in her daughter's badge; this one
// follows a grandfather's year of quiet practice landing in his
// granddaughter's first dance — same earned-pride shape, a fresher,
// smaller and more specific moment, told in one breath.
// Writes a single line of text (1-240 characters) to /output/entry.txt:
// a quiet, earned moment of pride for someone in a concrete scene.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "For a year he practised the same three chords after every shift, and tonight his granddaughter finally danced to his guitar in their tiny kitchen.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");

  // Write exactly the line: no trailing newline, so the file holds
  // precisely what the judge reads.
  writeFileSync(outPath, LINE, "utf8");

  // Read-back gate: refuse anything outside 1-240 characters.
  const back = readFileSync(outPath, "utf8");
  const chars = [...back].length;
  if (chars < 1 || chars > 240) {
    throw new Error(`entry.txt is ${chars} characters; must be 1-240`);
  }
  if (back.trim().length === 0) {
    throw new Error("entry.txt is only whitespace");
  }
  if (back.includes("\n")) {
    throw new Error("entry.txt must be a single line");
  }
  if (back !== LINE) {
    throw new Error("entry.txt does not match the intended line");
  }
  console.log(`Wrote ${chars} characters to ${outPath}`);
}

main();
