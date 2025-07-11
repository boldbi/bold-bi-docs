# Use Ubuntu as the base image
FROM ubuntu:22.04 AS base

# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install required packages
RUN apt-get update && apt-get install -y \
  nginx \
  zip \
  nano \
  curl && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# Create directory for your content
RUN mkdir -p /home/boldbi-doc

# Expose port 80 for web traffic
EXPOSE 80
EXPOSE 443

# Remove default nginx site config
RUN rm /etc/nginx/sites-available/default

# Copy your static files and custom nginx config
COPY /public /home/boldbi-doc/
COPY boldbi-doc-nginx.conf /etc/nginx/sites-available/default

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
