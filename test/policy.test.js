import test from "node:test";
import assert from "node:assert/strict";
import { classifyAction, governWorkflow } from "../src/policy.js";

test("reversible verification is allowed", () => {
  assert.equal(classifyAction("run unit tests").decision, "allow");
});

test("production deploy requires approval", () => {
  assert.equal(classifyAction("deploy to production").decision, "approval_required");
});

test("secret rotation requires approval", () => {
  assert.equal(classifyAction("rotate production secret").decision, "approval_required");
});

test("empty action is denied", () => {
  assert.equal(classifyAction("").decision, "deny");
});

test("workflow preserves order and decisions", () => {
  const out = governWorkflow(["test", "publish release"]);
  assert.equal(out.length, 2);
  assert.equal(out[0].decision, "allow");
  assert.equal(out[1].decision, "approval_required");
});
