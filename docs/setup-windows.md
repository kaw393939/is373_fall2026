# Set up Docker on Windows with WSL 2

[Back to README](../README.md)

WSL 2 runs a Linux environment on Windows. This guide uses Ubuntu for project commands and Docker Desktop for the container engine.

## 1. Check your PC

Use a supported 64-bit Windows release and at least 8 GB of RAM. Check **Task Manager → Performance → CPU → Virtualization**; it must be enabled. If disabled, use your PC manufacturer's BIOS/UEFI instructions or ask your IT administrator. Check your Windows version against [Docker's current requirements](https://docs.docker.com/desktop/setup/install/windows-install/#system-requirements).

## 2. Install WSL and Ubuntu

Open **PowerShell as Administrator** (right-click it in Start), then run:

```powershell
wsl --install -d Ubuntu
```

Restart Windows. Open **Ubuntu** from Start and create your Linux username and password. No characters appear while typing the password; this is normal.

Return to **PowerShell** and run:

```powershell
wsl --update
wsl --version
wsl --list --verbose
```

The Ubuntu row must show `2` in the **VERSION** column. If it shows `1`, run:

```powershell
wsl --set-version Ubuntu 2
```

Already have Ubuntu? Skip its installation and run the update and checks above. If the distribution has another name, use the exact name shown in the list. [Microsoft's WSL installation guide](https://learn.microsoft.com/en-us/windows/wsl/install).

## 3. Install Docker Desktop on Windows

1. Download the installer matching your PC from [Docker Desktop for Windows](https://docs.docker.com/desktop/setup/install/windows-install/).
2. Run it, choose the recommended per-user installation if offered, and select **WSL 2** as the backend when prompted. Complete any requested restart.
3. Open **Docker Desktop** from Start, review its agreement, and accept to continue.

## 4. Connect Docker to Ubuntu

In Docker Desktop:

1. Under **Settings → General**, enable **Use WSL 2 based engine** if the option is shown.
2. Under **Settings → Resources → WSL Integration**, enable **Ubuntu** and apply the changes.
3. Wait for the engine to start, then reopen Ubuntu.

If WSL Integration is missing, switch Docker Desktop to **Linux containers**. Docker needs WSL version **2.1.5 or newer**; `wsl --update` keeps it current. Use Docker Desktop's integration rather than installing a second Docker engine inside Ubuntu. [Docker's WSL guide](https://docs.docker.com/desktop/features/wsl/).

## 5. Verify in Ubuntu

Run these in the **Ubuntu terminal**, not PowerShell:

```sh
docker --version
docker compose version
docker run --rm hello-world
```

Expect two version numbers and **Hello from Docker!** If `docker` is missing, recheck Ubuntu's integration toggle. If it cannot connect, confirm Docker Desktop is running.

**Next: [Run the app](run-the-app.md).** Use Ubuntu for all commands in that guide.
