FROM mcr.microsoft.com/playwright:v1.35.0-jammy 
RUN apt-get update && apt-get install -y \
    x11-apps iproute2 weston neovim htop sudo && \
    echo "pwuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER pwuser
CMD tail -f /dev/null
