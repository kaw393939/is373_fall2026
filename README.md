# IS373 Fall 2026

A Next.js application with TypeScript, App Router, ESLint, and Docker development and production environments.

## Quick start with Docker

Install and open [Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/), then run:

```sh
git clone git@github.com:kaw393939/is373_fall2026.git
cd is373_fall2026
docker compose up --build
```

Open [localhost:3000](http://localhost:3000). Edit `src/app/page.tsx` to start building; changes reload automatically. Dependencies and Next.js cache live in Docker volumes, isolated from your host. Node.js is optional when using Docker.

```sh
docker compose down                # Stop development
docker compose logs -f web         # View logs
docker compose exec web npm run check
```

The development container runs `npm ci` at startup so lockfile changes are applied. Restart it after changing dependencies. Use `docker compose down -v` only when you want to discard the development dependency and build caches.

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

Use Node.js 24 LTS (`nvm use` if you use nvm):

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
