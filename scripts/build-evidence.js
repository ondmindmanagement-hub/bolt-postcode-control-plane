import fs from "node:fs";
import { governWorkflow } from "../src/policy.js";

const workflow = [
  "review merge request",
  "run unit tests",
  "build package",
  "scan dependencies",
  "prepare release notes",
  "deploy to production",
  "check post-release health",
  "write governance summary"
];

const result = {
  generated_at: new Date().toISOString(),
  autonomy: "supervised",
  lifecycle_stages: ["verify", "package", "secure", "release", "configure", "monitor", "govern"],
  workflow: governWorkflow(workflow)
};

fs.mkdirSync("evidence", { recursive: true });
fs.writeFileSync("evidence/workflow.json", JSON.stringify(result, null, 2) + "\n");
console.log("wrote evidence/workflow.json");
