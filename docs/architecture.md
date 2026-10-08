# Architecture

BOLT PostCode Control Plane targets the supervised autonomy level.

A GitLab Duo custom flow reasons over the repository and pipeline context.
GitLab CI/CD then provides deterministic lifecycle evidence across seven
post-code stages:

verify -> package -> secure -> release -> configure -> monitor -> govern

The production boundary is represented by a manual GitLab CI job. The agent can
prepare and validate the release candidate, but a human approves the production
transition. Downstream monitoring and governance jobs consume the approval
artifact and create auditable evidence.
