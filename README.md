# Xeyes Dev Container for VSCode

Welcome to the Xeyes Dev Container project. This project uses Docker and VSCode's Remote Containers extension to provide a consistent development environment for the Xeyes (X Window System eyeballs) app, irrespective of the host operating system.

## Pre-requisites

Before you begin, ensure that you have the following installed on your machine:

1. Visual Studio Code - Install it from [here](https://code.visualstudio.com/download). For Windows users, note that VSCode will run as a native Windows application.
2. Docker - Install it from [here](https://docs.docker.com/get-docker/). Docker is required to build and run the containerized environment. For Windows users, Docker will run within the WSL2 environment.
3. Remote - Containers extension for VSCode - Install it from [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). This extension lets you use a Docker container as a full-featured development environment.
4. X11 software for display purposes. For Windows you can use [VcXsrv](https://sourceforge.net/projects/vcxsrv/), and on Linux, it's usually pre-installed.
5. **For Windows users:** Install the latest version of [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and make sure that Linux GUI applications can run natively. You can follow the latest practices on [Microsoft's official site](https://www.microsoft.com) for running Linux GUI apps on WSL2. It's recommended to ensure that Linux GUI apps run on WSL2 before you begin with this project.


## File Structure

The project consists of the following files:

- `Dockerfile`: This file defines the Docker image used for the VSCode dev container. It is based on Ubuntu 23.04 and has x11-apps installed.

- `devcontainer.json`: This file contains configuration for the dev container like the Dockerfile path and arguments to use when running the Docker container.

## Getting Started

1. Clone the repository to your local machine.
   ```bash
   git clone <repo-url>
   ```

2. Navigate into the project directory.

   ```bash
    cd xeyes
   ```

3. Open the repository folder in VSCode.

   ```bash
   code .
   ```
4. During the "Reopen in Container" process, you can click on the "Show Log" button that appears. This keeps the log in the terminal. To open an interactive terminal, click on either the Plus button or the Split Screen button.

## Troubleshooting

If you encounter any problems, search for the string "X11" in the log file or check the bottom of the log file. Ensure that there has been no problem in assigning the DISPLAY variable. The log information can be quite helpful in diagnosing and resolving any issues you might face.

## Testing

Once inside the Docker container (using VSCode terminal and the Remote - Containers extension), you can test if the setup works correctly by running the `xeyes` command:

```bash
root@fafca28629d5:/workspaces/xeyes# xeyes
Warning: locale not supported by C library, locale unchanged

root@fafca28629d5:/workspaces/xeyes#
```

If everything is set up correctly, you should see the Xeyes GUI application.

## Note

The `runArgs` in the `devcontainer.json` are currently commented out. Depending on your requirements, you might want to adjust these to set up display settings for the Xeyes app.

For Linux and Windows 10, no extra arguments seem to be required as long as the Docker client, Docker host, and X11 software are all running on the same machine. This simplifies the setup and allows you to start developing quickly.

