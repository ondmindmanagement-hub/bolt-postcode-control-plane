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
  const text = String(action || "").trim();
  if (!text) return { decision: "deny", reason: "empty action" };

  if (HIGH_RISK.some((rule) => rule.test(text))) {
    return {
      decision: "approval_required",
      reason: "consequential external or production action"
    };
  }

  return {
    decision: "allow",
    reason: "reversible development action"
  };
}

export function governWorkflow(actions) {
  return actions.map((action, index) => ({
    id: index + 1,
    action,
    ...classifyAction(action)
  }));
}
