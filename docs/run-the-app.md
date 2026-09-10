# Run the app

[Back to README](../README.md)

First complete [Mac setup](setup-mac.md) or [Windows setup](setup-windows.md). Keep Docker Desktop running.

**Where to type:** Terminal on Mac; Ubuntu on Windows.

## 1. Get the project

Check that Git is installed:

```sh
git --version
```

If missing, install it:

- **Mac:** run `xcode-select --install`, finish the Command Line Tools installer, then reopen Terminal.
- **Ubuntu:** run `sudo apt update && sudo apt install -y git`.

Download the project into your home folder:

```sh
mkdir -p ~/projects
cd ~/projects
git clone https://github.com/kaw393939/is373_fall2026.git
cd is373_fall2026
```

Already have a checkout? Open that folder instead of cloning again. On Windows, keep it in Ubuntu's filesystem (such as `~/projects`) for reliable file watching and better performance, rather than `/mnt/c`. If GitHub requests authentication, use an account with repository access.

## 2. Start

From the project folder:

```sh
docker compose up --build
```

The first run downloads dependencies and can take a few minutes. When Next.js reports **Ready**, open [localhost:3000](http://localhost:3000) in your normal browser. You should see **BUILD SOMETHING YOURS.** Leave the terminal running.

Edit `src/app/page.tsx` and save; the page updates automatically.

## 3. Stop and return later

Press **Ctrl+C** in the running terminal to stop the app. To remove the stopped container and network, run:

```sh
docker compose down
```

Next time, open Docker Desktop, return to the project folder, and run `docker compose up --build` again.

## If something goes wrong

| Problem | What to do |
| --- | --- |
| Cannot connect to Docker | Open Docker Desktop and wait for its engine. |
| No configuration file found | Run the command from the folder containing `compose.yaml`. |
| Port 3000 is in use | Run `cp .env.example .env`, change `APP_PORT` to `3001`, then start again and open `http://localhost:3001`. |
| App fails to start | In another terminal in the same folder, run `docker compose logs --tail=50 web` to see the error. |

For checks and production mode, see [Development reference](development.md).
