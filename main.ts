// SockRansom 2000 — One-Sentence Absurd Invention Pitch.
// Writes exactly one sentence (169 characters) to entry.txt.
// Deterministic: no input, no randomness, no network, no clock.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: a washing machine that solves the lost-sock mystery by
// admitting it eats one sock per load and negotiating its return.
const SENTENCE =
  "The SockRansom 2000 is a washing machine that eats exactly one sock per load, " +
  "then leaves a tiny ransom note demanding one capful of fabric softener for its safe return.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, SENTENCE, "utf8");

// Post-write verification: the file on disk must be byte-identical to the
// sentence constant — 1–220 characters, exactly one line, no trailing newline.
const written = readFileSync(outPath, "utf8");
if (written !== SENTENCE) {
  throw new Error("entry.txt does not match the pitch sentence byte-for-byte");
}
if (written.length < 1 || written.length > 220 || written.includes("\n")) {
  throw new Error("entry.txt must be a single line of 1–220 characters");
}
