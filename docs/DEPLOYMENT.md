# Static publication and handoff

## Inspected state

Repository: `https://github.com/rotateypotatey/preparethefrog`, default branch `main`.

At inspection for this redesign, GitHub reports `has_pages: false`, no repository homepage, and no Actions workflows on main. No CNAME, hosting-provider configuration, or deployment documentation exists in the original checkout. The production URL, host, automatic publication trigger, and currently running revision are therefore unverified. A local build or pushed PR does not establish live rollout.

Jeff requested that the approved design be pushed to GitHub so he can get it onto the site. This handoff adds validation and a static artifact only; it does not create or invoke a deployment workflow, change hosting, or merge the PR.

## Artifact

Run `npm test` and `npm run build` with Node.js 24+. Upload the **contents** of `dist/` to the existing static document root, or use the `preparethefrog-static` artifact from a successful validation run after reviewing the commit. The root `index.html`, `styles.css`, and `script.js` also work with an existing host that serves the source tree.

No environment variables or secrets are needed for the site or build. The optional local-only `PORT` variable changes the development server port. Runtime data is not persisted. Google Fonts is the only external rendering dependency, with local font fallbacks.

## Release policy

The source path is feature branch -> PR -> passing validation -> explicitly authorized squash merge. Jeff performs publication for this handoff. Once the actual host is identified, document its repository link, root/build settings, production URL, and automatic publication after reviewed, validated merges. Static hosting may use inexpensive cloud hosting under the shared production policy. Do not introduce a container, NAS SSH, runner, or Portainer release path for this static site.

The absence of an identified host prevents verifying or wiring automatic publication in this change. This remains an explicit setup gap, not evidence of a completed deployment.

## Verification and rollback

After publication, verify the live headline, corkboard, favicon, twelve-case proof button, keyboard access, and mobile layout; confirm the published revision against the reviewed commit. Report actual rollout separately from CI success.

Keep the previous static artifact. To roll back, restore it using the existing host's authorized release mechanism, then verify the live page and assets. Source rollback should be a revert through a new PR, followed by validation and authorized publication. No database or runtime-content migration is involved.
