# Xeyes Dev Container

Our primary goal is to gather genuine experiences from users. We want to make sure that VSCode Devcontainers do a stellar job for our IT worker cooperatives. To accomplish this, we're using Xeyes as a fun, yet solid first step to test out the waters. Once we've got this down, we're all set to bring in more serious players, like Microsoft Playwright and other interactive testing tools, to work side by side with VSCode. This creates a stage for smooth development and testing, accessible across multiple operating systems. It's our small step towards making tech collaboration more inclusive and efficient.

This README.md was brought to you by ChatGPT with some excellent human guidance. We hope you found it useful for your journey into cross-platform development with VSCode and Docker. Happy coding!

## Pre-requisites

Before you begin, ensure that you have the following installed on your machine:

1. Visual Studio Code - Install it from [here](https://code.visualstudio.com/download). For Windows users, note that VSCode will run as a native Windows application.
2. Docker - Install it from [here](https://docs.docker.com/get-docker/). Docker is required to build and run the containerized environment. For Windows users, Docker will run within the WSL2 environment.
3. Remote - Containers extension for VSCode - Install it from [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). This extension lets you use a Docker container as a full-featured development environment.
4. **For Windows users:** Install the latest version of [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and make sure that Linux GUI applications can run natively. You can follow the latest practices on [Microsoft's official site](https://www.microsoft.com) for running Linux GUI apps on WSL2. It's recommended to ensure that Linux GUI apps run on WSL2 before you begin with this project.


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

## Working with ssh-agent on Windows

This document provides a guide on how to check the status of the ssh-agent service, set it to start automatically, and start the service manually on a Windows system.

## Checking the Status of ssh-agent for Windows Host

You can check the status of the ssh-agent service by running the following command in PowerShell:

```powershell
Get-Service -Name ssh-agent
```

The output will show the status of the ssh-agent service. If it's running, you'll see the status as `Running`.

## Setting ssh-agent to Start Automatically

To set the ssh-agent service to start automatically during system boot, run the following command in PowerShell:

```powershell
Set-Service -Name ssh-agent -StartupType 'Automatic'
```

You can confirm that the change was successful by checking the `StartupType` of the service. Run this command:

```powershell
Get-WmiObject -Query "Select * From Win32_Service Where Name='ssh-agent'"
```

In the output, you should see `StartMode : Auto` which confirms that the ssh-agent service is set to start automatically.

## Starting the ssh-agent Service

If the ssh-agent service is not currently running, you can start it by running the following command in PowerShell:

```powershell
Start-Service ssh-agent
```

You can confirm that the service is running by checking the status of the service. Run this command:

```powershell
Get-Service ssh-agent
```

In the output, you should see `Status : Running` which confirms that the ssh-agent service is currently running.
