import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My AI coding agent types faster than me, debugs faster than me, and just asked for the demo to be pre-recorded so it never has to watch a human think.";

const line = joke.replace(/\s+/g, " ").trim();
const count = [...line].length;

if (count < 1 || count > 280) {
  throw new Error(`joke must be 1-280 characters, got ${count}`);
}
if (line.includes("\n")) {
  throw new Error("joke must be a single line");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line + "\n", "utf8");

console.log(line);
console.log(`chars=${count}`);
