# Set up Docker on Mac

[Back to README](../README.md)

## 1. Check your Mac

Use a supported macOS release (the current major release or either of the previous two) and at least 4 GB of RAM. In **Apple menu → About This Mac**, check whether your Mac has an Apple chip or an Intel processor. [Requirements and download](https://docs.docker.com/desktop/setup/install/mac-install/).

## 2. Install Docker Desktop

1. Download the matching **Apple silicon** or **Intel** installer from the link above.
2. Open `Docker.dmg` and drag **Docker** to **Applications**. Wait for copying to finish.
3. Open **Docker** from Applications. Review and accept its agreement to continue.
4. Choose **Use recommended settings**, finish setup, and enter your Mac password if prompted.
5. Wait until Docker Desktop reports that the engine is running.

Docker Desktop includes Docker Compose. These steps follow the [official Mac installation guide](https://docs.docker.com/desktop/setup/install/mac-install/).

## 3. Verify in Terminal

Open a new **Terminal** window and run:

```sh
docker --version
docker compose version
docker run --rm hello-world
```

The first two commands print versions. The last downloads a small test image and should print **Hello from Docker!**

If a command is missing, reopen Terminal and check Docker Desktop's command-line tool settings. If Docker cannot connect, open Docker Desktop and wait for the engine.

**Next: [Run the app](run-the-app.md).**
