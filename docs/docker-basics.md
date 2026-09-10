# Docker and containerization

[Back to README](../README.md)

**Containerization** packages an app with the runtime and libraries it needs, then runs it in an isolated environment called a **container**. **Docker** provides tools to build and run these containers.

For this project, the container supplies Node.js and the app's dependencies. Everyone uses the same declared environment, which reduces “it works on my computer” problems.

## Five terms you will see

| Term | Meaning in this project |
| --- | --- |
| **Image** | The packaged app environment used to create a container. |
| **Container** | An instance of that image; starting it runs the app. |
| **Dockerfile** | The recipe for building our development and production images. |
| **Compose** | The tool that reads `compose.yaml` to build and start the app with its settings. |
| **Volume** | Storage managed by Docker that can survive container removal. We use it for dependencies and build caches. |

## What happens when you start the app?

```text
Dockerfile → image → running container → localhost:3000
```

`docker compose up --build` builds the image and starts the container. The port setting makes the app reachable from your browser. In development, your project folder is also shared with the container through a **bind mount**, so saved code changes appear without rebuilding the image.

Your source code stays in your project folder. `docker compose down` removes the container and its network, while keeping your code and named volumes. Removing a container does discard files stored only inside that container.

## Is a container a virtual machine?

A container isolates processes while sharing a Linux kernel; it does not boot its own complete operating system. Docker Desktop supplies the Linux environment on Mac and, with our setup, uses WSL 2 on Windows.

Containers make environments more consistent, but do not automatically provide backups, security, or deployment. Our production image is a separate build of the same app; see [Development reference](development.md) when you need it.

**Ready to try it?** Start with [Mac setup](setup-mac.md) or [Windows setup](setup-windows.md), then [run the app](run-the-app.md).

## Read our Compose file

Open `compose.yaml` beside this guide. Its `web` service is the running Next.js app.

| Setting | What it means here |
| --- | --- |
| `build.target: development` | Use the development stage of our Dockerfile. |
| `127.0.0.1:${APP_PORT:-3000}:3000` | Forward a port on your computer to port 3000 in the container. The host port defaults to 3000 and is bound to local access. |
| `.:/app` | Bind-mount your project directory into the container; source edits are shared. |
| `node_modules:/app/node_modules` | Keep the container's installed dependencies in a named volume, separate from host dependencies. |
| `next_cache:/app/.next` | Keep generated Next.js files in a named volume. |
| `npm ci && npm run dev` | Install dependencies from the lockfile, then run the development server. |
| `healthcheck` | Ask `/api/health` whether the app responds; this does not test every page or feature. |

The Dockerfile uses Node.js 24 on a Linux base. Docker Desktop supplies a Linux environment on macOS and Windows. The lockfile fixes dependency versions, while the base image tag can receive updates; containerization improves consistency rather than guaranteeing identical behavior on every machine forever.

## Where your files go

```text
Your computer                         Development container
project source  ←── bind mount ──→    /app
Docker dependency volume ────────→    /app/node_modules
Docker build-cache volume ───────→    /app/.next
browser at localhost:3000 ───────→    app listening on container port 3000
```

Editing a bind-mounted source file inside the container also changes the file in your local project. Files stored only in the container's writable layer disappear when that container is removed. Named volumes remain after an ordinary `docker compose down`. The `-v` option additionally deletes Compose volumes; do not use it as a routine stop command. Source files are not a substitute for Git commits or backups, and volumes are not backups either.

## A short hands-on exercise

From the project directory, with Docker Desktop running:

```sh
docker compose up --build
```

Keep that terminal open. In a second terminal in the same directory:

```sh
docker compose ps
docker compose exec web node --version
docker compose logs --tail=30 web
```

Identify the service, host port, and Node version. Open the homepage, make a small text edit in `src/app/page.tsx`, and save. Explain why the page can update without rebuilding the image: the source is bind-mounted and the development server watches for changes. Undo your exercise edit if you do not want to keep it.

With the development service running, check the project inside its environment:

```sh
docker compose exec web npm run check
```

Stop the app with Ctrl+C in its first terminal, then run `docker compose down`. Confirm your source edit still exists locally. Start again and explain which pieces were recreated and which storage remained. Do not delete volumes for this exercise.

## Development and production have different jobs

Development favors editing: shared source and a development server. Production uses the Dockerfile's builder stage to compile the app, then copies the standalone output, static assets, and public files into a smaller runtime image. The production process runs as a non-root user and has no source bind mount.

Use the commands in [Development reference](development.md) when you are ready to test a production container. Stop development first because the configurations use the same default host port. Production builds can fail even when a development page appears to work, so both are useful checks for application changes.

Neither configuration sets up a public domain or HTTPS. Publication is a later, explicit step. A future CMS may introduce another service and persistent content storage, but this phase has no database service.

## Diagnose the layer that failed

- **Docker engine unavailable:** start Docker Desktop before retrying.
- **Compose cannot find configuration:** navigate to the repository directory.
- **Port already allocated:** stop the conflicting local app, or use the `APP_PORT` steps in [Run the app](run-the-app.md).
- **Dependency installation fails:** inspect the service logs and connectivity; do not delete source files or the lockfile to hide the error.
- **Code compiles but the page is wrong:** inspect the page and application code. Rebuilding a container does not correct a layout or content mistake.

Explain in your own words: What is the difference between an image and a container? Which side of the port mapping does your browser use? What survives `down`? Why do we isolate Linux dependencies from host dependencies?

Sources: [Docker's container explanation](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) and [persistent container storage](https://docs.docker.com/get-started/docker-concepts/running-containers/persisting-container-data/). The file paths and commands above describe this repository's configuration.
