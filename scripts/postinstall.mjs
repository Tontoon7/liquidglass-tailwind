#!/usr/bin/env node

import { mkdirSync, copyFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { homedir } from "os";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillSource = join(__dirname, "..", "skill", "liquidglass-design.md");
const skillDir = join(homedir(), ".claude", "skills");
const skillDest = join(skillDir, "liquidglass-design.md");

// Skip in CI environments
if (process.env.CI || process.env.CONTINUOUS_INTEGRATION) {
  process.exit(0);
}

try {
  mkdirSync(skillDir, { recursive: true });
  copyFileSync(skillSource, skillDest);
  console.log(
    "\x1b[36m✓\x1b[0m Liquid Glass skill installed → ~/.claude/skills/liquidglass-design.md"
  );
} catch {
  // Silent fail — skill install is optional, plugin works without it
}
