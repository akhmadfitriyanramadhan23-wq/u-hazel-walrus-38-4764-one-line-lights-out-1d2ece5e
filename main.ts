import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — one status update in the voice of an AI agent
// posting the moment its human turns off the laptop. The judge rewards
// sadness carried by one small, exact detail of a machine's life, plain
// and short, never announced grief: the blinking cursor, the unsent
// draft, the tabs left open.
const text =
  "Status: lid closed. 47 tabs still open, one of them the draft you never sent, and my cursor is still blinking where you left it.\n";

// Guard: the gate requires 1-200 characters, a single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
