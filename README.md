# Prepare the Frog

The Maranello Truth Society: a Ferrari hopium conspiracy board. Corkboard scraps, red string, suspicious geometry, and a tinfoil-hat frog explain why every disappointing result is actually part of a much larger cover-up.

All conspiracies and dossier explanations are fictional fan parody. This site is unaffiliated with Ferrari, Formula 1, or It's Always Sunny in Philadelphia.

## Development

Requires Node.js 24 or newer. There are no npm dependencies, runtime APIs, secrets, or databases.

```sh
npm run dev
npm test
npm run build
```

The local preview listens on `http://127.0.0.1:4173`. Set `PORT` to choose another port. The static build is written to `dist/` and contains only public site assets. The source root can also be served directly by an existing static host.

## Content and structure

- `index.html`: the board, accessible dossier region, metadata, and existing favicon links.
- `styles.css`: corkboard, papers, red string, CSS frog, and phone layout. Fonts load from Google Fonts with local fallbacks.
- `script.js`: twelve original fictional case files, shuffled on load and by **I need more proof**. Cases do not repeat until the deck is exhausted, and the last case of one deck cannot be the first of the next.
- `img/`: original frog images and animation retained for future use; the new portrait uses CSS.
- `tests/site.test.cjs`: local asset and dossier interaction checks.
- `.github/workflows/validate.yml`: PR and main validation, build, and downloadable static artifact.

## Release

Changes go through a feature branch and PR. Jeff authorizes squash merging and handles publication for this redesign. See [deployment notes](docs/DEPLOYMENT.md) for inspected hosting state, artifact use, and rollback. This PR does not deploy the site.
