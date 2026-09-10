# Development reference

[Back to README](../README.md) · [Run the app](run-the-app.md)

Run these commands from the project folder in Terminal on Mac or Ubuntu on Windows.

## Everyday commands

With development running, use a second terminal:

```sh
docker compose logs -f web          # View logs; Ctrl+C exits this view
docker compose exec web npm run check  # ESLint and TypeScript
docker compose ps                  # Container status
```

The development container runs `npm ci` at startup. After dependency changes, commit `package-lock.json`, run `docker compose down`, then start again with `docker compose up --build`.

Dependencies and build caches use Docker volumes. To deliberately reset those caches, use `docker compose down -v`; it deletes those volumes but keeps your source files.

## Production container

Stop development first, since both environments default to port 3000:

```sh
docker compose down
docker compose -f compose.production.yaml up --build -d --wait
curl --fail http://localhost:3000/api/health
docker compose -f compose.production.yaml down
```

The multi-stage Dockerfile produces a standalone Next.js image running as a non-root user. The production service includes a health check, restart policy, and dropped Linux capabilities. No source bind mounts or development dependencies are included in the final image. Ports bind to localhost; a public deployment needs a reverse proxy with HTTPS and appropriate host configuration.

To use another host port, copy `.env.example` to `.env` and change `APP_PORT`, or prefix a Compose command with `APP_PORT=3001`. This controls the published port, not the container's internal port.

## Local development without Docker

Stop the Docker app first to free port 3000. Use Node.js 24 LTS (`nvm use` if you use nvm):

```sh
npm ci
npm run dev
```

```sh
npm run check  # ESLint and TypeScript
npm run build  # Production build
npm start      # Serve the build locally
```

## Project structure

- `src/app/page.tsx` — home page
- `src/app/layout.tsx` — root layout and metadata
- `src/app/globals.css` — responsive styles
- `src/app/api/health/route.ts` — HTTP health endpoint
- `Dockerfile` — development, build, and production stages
- `compose.yaml` — development with live reload
- `compose.production.yaml` — production container
- `.github/workflows/ci.yml` — lint, type check, Docker build, and HTTP smoke checks

Commit `package-lock.json` when dependencies change. Environment files are ignored by Git and excluded from Docker builds. Pass server secrets explicitly at runtime when needed; never put secrets in variables prefixed `NEXT_PUBLIC_`, which are exposed to browsers and baked in at build time.

Reference: [Next.js standalone output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output).
