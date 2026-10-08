# BOLT PostCode Control Plane - GitLab Duo instructions

Goal: automate the post-code DevSecOps lifecycle while keeping production-impacting actions behind an explicit human boundary.

When working in this repository:

1. Inspect the current pipeline and repository state before proposing changes.
2. Prefer small, reversible changes.
3. Run tests and security checks before recommending release.
4. Never claim that a deployment or external side effect occurred unless the corresponding GitLab job completed.
5. Treat production deployment, publishing, credential changes, destructive actions, and irreversible operations as approval-required.
6. Produce a concise final summary containing:
   - stages touched;
   - tests/security status;
   - changes made;
   - unresolved risks;
   - whether human approval is still required.
