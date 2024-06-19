---
layout: post
title: How to Update SSL Certificate in Kubernetes Secret | Bold BI Docs
description: Learn the instructions and steps for updating the SSL certificate in the Kubernetes secret of Bold BI site with its pre-requestees AWS-CLI.
platform: bold-bi
documentation: ug
---

# How to update SSL certificate in Kubernetes secret of Bold BI site?

## Prerequisites
- AWS-CLI

## Steps to update SSL certificate in the Kubernetes secret of Bold BI site

Please follow the steps to update SSL certificate in the Kubernetes secret of Bold BI site.

1. Follow the below steps to Connect your Kubernetes cluster.

      - Click aws command in the Linux terminal or Windows command prompt.
    
            sudo systemctl daemon-reload

      - Enter AWS Access Key ID, AWS Secret Access Key, Default region name, Default output format.

        ![Update The SSL Certificate In The Kubernetes](/bold-bi-docs/static/assets/embedded/faq/images/update-the-ssl-certificate-in-the-kubernetes.png)

      - Update kubeconfig using the following example.

             aws eks --region <region-name> update-kubeconfig --name <cluster-name>

      - Now you have connected to your EKS cluster successfully.

2. Delete existing boldbi-tls secret in Bold BI namespace in which Bold BI site was deployed.

        kubectl delete secret boldbi-tls -n boldbi --ignore-not-found

3. Create new boldbi-tls secret using certificate and private key file shown in the following.

        kubectl create secret tls boldbi-tls -n boldbi --key <private-key-path> --cert <certificate-path>

4. Once you have created new secret, site SSL issue will be resolved.




