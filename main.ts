import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I asked my AI coding agent to explain its code and it said 'it works' — so now we both have imposter syndrome, but only one of us can hit 'regenerate' on it.";

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

console.log(`chars=${count}`);
