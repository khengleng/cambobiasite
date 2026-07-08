# Cambobia Security Checklist

This website is a static marketing site. The main remaining defacement risks are repository access, deployment access, and DNS control rather than application logic.

## Code and delivery controls

- Serve the site only through the hardened `server.mjs` entrypoint.
- Keep dependencies updated and review `npm audit` before each release.
- Keep security headers enabled in production, especially CSP and frame blocking.

## GitHub controls

- Require MFA for every GitHub account with repository access.
- Enable branch protection on `main`.
- Require pull requests before merge where practical.
- Restrict admin bypass for direct production changes.
- Review repository collaborators regularly and remove unused access.

## Railway controls

- Limit Railway project access to named operators only.
- Require MFA on every Railway account with deploy access.
- Keep the site in its own Railway service and project scope.
- Review deploy history and environment access regularly.

## DNS and domain controls

- Keep registrar MFA enabled.
- Lock the domain at the registrar when possible.
- Limit DNS write access to a minimal set of operators.
- Review DNS records after any infrastructure change.

## Incident readiness

- If defacement is detected, remove deploy access first, verify GitHub commit history, then review Railway deployment history and DNS changes.
- Rotate credentials or revoke sessions for any operator account that may have been exposed.
