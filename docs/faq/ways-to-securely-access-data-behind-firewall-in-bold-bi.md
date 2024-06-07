---
layout: post
title: Ways to securely access data behind firewall in Bold BI | Bold BI
description: Three ways to securely access data behind firewall in Bold BI are Direct access, Site to Site VPN and SSH Tunnel.
platform: bold-bi
documentation: ug
---
# Ways to securely access data behind firewall in Bold BI

To connect to your data securely in Bold BI, you can choose any one of the supported solutions listed below.

## Direct access

To use Bold BI Cloud, you must whitelist the IP addresses provided [here](https://help.boldbi.com/working-with-data-source/white-list-ip-address-bold-bi-cloud/) in order to create a datasource.

## Site to Site VPN

A site-to-site VPN is a secure way to connect different networks over the internet. WireGuard is a modern VPN protocol that offers state-of-the-art cryptography and is designed to be simpler and more efficient than its predecessors. This guide will walk you through the process of setting up a site-to-site VPN using WireGuard to ensure secure access to services.

## Configuration Steps

### Step 1: Get Configuration File
Obtain the WireGuard Server setup and configuration file, typically named `wgclient.conf`, by contacting [support](https://www.boldbi.com/support). The wgclient.conf file will contain the necessary information to establish a secure connection.

### Step 2: Install WireGuard
Install the WireGuard application on the device that will act as the endpoint for your site-to-site VPN. WireGuard is available for various operating systems, and installation instructions can be found on the [official WireGuard website](https://www.wireguard.com/install/).

### Step 3: Add Tunnel
Open the WireGuard application and go to the "Add Tunnel" option. Here, import the `wgclient.conf` configuration file. This will create a new VPN tunnel based on the settings defined in the file.

![Wireguard Add Tunnel](/static/assets/faq/images/wireguard-add-tunnel.png)

### Step 4: Activate Connection
After importing the configuration file, review the configuration details to ensure they are correct. Then, click "Activate" to establish the VPN connection. The status should change to indicate that the tunnel is active.

![Wireguard Client Details](/static/assets/faq/images/wireguard-client-details.png)

## SSH Tunnel
Bold BI supports you in enabling SSH for the selected [data sources](/faq/how-to-connect-data-sources-with-ssh-connection-in-bold-bi/).
