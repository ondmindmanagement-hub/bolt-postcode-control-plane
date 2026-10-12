const HIGH_RISK = [
  /production/i,
  /deploy/i,
  /publish/i,
  /delete/i,
  /secret/i,
  /credential/i,
  /release/i
];

export function classifyAction(action) {
  if (typeof action !== "string") {
    return { decision: "deny", reason: "action label must be a string" };
  }
  const text = action.trim();
  if (!text) return { decision: "deny", reason: "empty action" };

  if (HIGH_RISK.some((rule) => rule.test(text))) {
    return {
      decision: "approval_required",
      reason: "consequential external or production action"
    };
  }

  const safeLabels = new Set(["run unit tests", "test", "scan dependencies", "inspect logs", "git status", "git diff"]);
  if (safeLabels.has(text.toLowerCase())) {
    return { decision: "allow", reason: "explicitly allowlisted review action" };
  }

  return {
    decision: "approval_required",
    reason: "not explicitly allowlisted; human review required"
  };
}

export function governWorkflow(actions) {
  return actions.map((action, index) => ({
    id: index + 1,
    action,
    ...classifyAction(action)
  }));
}
