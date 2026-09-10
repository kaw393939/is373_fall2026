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
