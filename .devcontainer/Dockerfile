FROM mcr.microsoft.com/playwright:v1.35.0-jammy 

# Install the necessary dependencies
RUN apt-get update && apt-get install -y \
    x11-apps iproute2 weston neovim htop sudo \
    ca-certificates curl gnupg \
    && rm -rf /var/lib/apt/lists/*

# Add Docker's official GPG key and set up Docker repository
RUN install -m 0755 -d /etc/apt/keyrings \
    && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg \
    && chmod a+r /etc/apt/keyrings/docker.gpg \
    && echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update the APT package index
RUN apt-get update

# Install Docker CLI only
RUN apt-get install -y docker-ce-cli && rm -rf /var/lib/apt/lists/*

# Add user to sudoers
RUN echo "pwuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER pwuser

CMD tail -f /dev/null
