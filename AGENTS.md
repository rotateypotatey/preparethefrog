# Prepare the Frog

- Read Jeff's shared `agent-infrastructure/AGENTS.md` and `docs/PRODUCTION.md` before application or infrastructure work.
- This is a public static HTML/CSS/JavaScript site. Keep it dependency-free at runtime, with no API keys, backend, or live LLM requests.
- `index.html` contains the conspiracy board, `styles.css` its responsive presentation, and `script.js` the fictional dossier shuffle. Preserve the clearly labeled fan parody.
- Use Node.js 24+. Run `npm test`, `npm run build`, and `npm run dev` (loopback port 4173). No dependency installation is required.
- Validate actual desktop and mobile layouts and the proof button. Preserve keyboard access, zoom, and the live region. Keep initial content visible without JavaScript.
- Feature branch -> PR -> successful `validate` check -> Jeff-authorized squash merge. Never push directly to main or merge without authorization.
- CI: `.github/workflows/validate.yml` produces the static `dist/` artifact. Never commit `dist/`, screenshots, local configuration, or secrets.
- Hosting and publication: see `docs/DEPLOYMENT.md`. No deployment workflow exists in this checkout. Jeff handles publication for this handoff; do not invent a hosting target or deploy.
- Keep README and deployment notes current when commands, hosting, or publication change.
