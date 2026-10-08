# BOLT PostCode Control Plane

**Life After Code - GitLab Transcend Hackathon 2026**

A supervised GitLab agent workflow that takes a release candidate across the
post-code DevSecOps lifecycle while preserving explicit human authority at the
production boundary.

## Lifecycle coverage

This project intentionally covers seven post-code stages:

**verify -> package -> secure -> release -> configure -> monitor -> govern**

GitLab Duo is represented by a custom Release Guardian flow at
.gitlab/duo/flows/release-guardian.yml. GitLab CI/CD provides deterministic
evidence for each stage.

## Control model

- reversible developer work: automatic;
- tests and security checks: automatic;
- release preparation: automatic;
- production transition: explicit human approval;
- monitoring and governance: automatic after approval.

This makes the project a **Supervised** agent submission: the automation handles
the multi-step workflow, while the consequential production outcome remains
human-controlled.

## Run locally

~~~
npm test
npm run evidence
node src/index.js
~~~

## GitLab pipeline

Push the repository to a public GitLab project. The pipeline runs verification,
packaging, security and release-preparation jobs automatically. The production
boundary is the manual configure:production-gate job. After approval, monitor
and govern jobs create the final evidence trail.

## Built for the hackathon

This repository is new work created during the Life After Code submission
period beginning October 5, 2026.

## License

MIT.
