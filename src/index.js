import { governWorkflow } from "./policy.js";

const actions = process.argv.slice(2);
const input = actions.length
  ? actions
  : [
      "run unit tests",
      "scan dependencies",
      "build package",
      "deploy to production"
    ];

console.log(JSON.stringify({
  project: "BOLT PostCode Control Plane",
  autonomy: "supervised",
  actions: governWorkflow(input)
}, null, 2));
