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

Please follow the steps to update the SSL certificate in the Kubernetes secret of the Bold BI site.

1. Follow the steps below to connect your Kubernetes cluster.

      - Click the AWS command in the Linux terminal or Windows command prompt.
    
            sudo systemctl daemon-reload

      - Please enter the AWS Access Key ID, AWS Secret Access Key, Default region name, and Default output format.

        ![Update The SSL Certificate In The Kubernetes](/static/assets/faq/images/update-the-ssl-certificate-in-the-kubernetes.png)

      - Update kubeconfig using the following example.

             aws eks --region <region-name> update-kubeconfig --name <cluster-name>

      - Now you have successfully connected to your EKS cluster.

2. Delete the existing boldbi-tls secret in the Bold BI namespace where the Bold BI site was deployed.

        kubectl delete secret boldbi-tls -n boldbi --ignore-not-found

3. Create a new boldbi-tls secret using the certificate and private key file shown below.

        kubectl create secret tls boldbi-tls -n boldbi --key <private-key-path> --cert <certificate-path>

4. Once you have created a new secret, the site SSL issue will be resolved.




