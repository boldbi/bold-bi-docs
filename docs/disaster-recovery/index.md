---
layout: post
title: Bold BI Disaster Recovery Backup and Restore | Bold BI Docs
description: "Learn how to back up and restore Bold BI application data, metadata and IMDB database for disaster recovery, then point Bold BI at restored resources."
platform: bold-bi
documentation: ug
---

# Disaster Recovery Documentation for Bold BI

## Overview

To recover Bold BI after a hardware failure, software crash or natural disaster, back up its application data, metadata and IMDB database, then restore them. Disaster recovery (DR) limits downtime and keeps business running. A DR plan for Bold BI needs an efficient backup and restore process. 

This guide outlines the steps for creating backups, restoring data, and reconfiguring Bold BI to point to restored resources. Back up application data, metadata and the IMDB database regularly. Knowing where Bold BI stores its persistent data helps you plan backups. The diagram shows the Bold BI infrastructure, including the load balancer, services, app data storage and database server, and how they interact.

  ![Bold BI architecture diagram showing the load balancer, services, app data storage and database server](/static/assets/installation-and-deployment/images/architecture-bold-bi.png)

The diagram shows that Bold BI stores its persistent data in the App_Data directory and a database server. The Bold BI Persistent Data section describes what each location stores and why it matters for disaster recovery.

## Bold BI Persistent Data

Bold BI persistent data includes users, groups, dashboards, schedules and application-related data. It is saved in these two resources:

1. App_Data
2. Database Server

### App_Data 

All dashboard resource information is saved in the App_Data location. App_Data can be stored in either of these supported options:

1. File Storage
2. Azure Blob Storage

![Bold BI setup Step 3 choosing File Storage or Azure Blob Storage](/static/assets/installation-and-deployment/images/file-storage.png)

#### File Storage
File Storage holds Bold BI application data. It can be local file storage or managed cloud storage, depending on the deployment environment. 

| Environment | App Data Location    |
|-------------|----------------------------------------------------------|
| Windows     | `{Deployed Location}/BoldServices/App_Data/`             |
| Linux       | `/var/www/bold-services/application/`                    |
| Docker      | Mounted Path/Mounted Storage   |
| Kubernetes  | File Share |
| Azure App Service | Azure Blob |

#### Azure Blob Storage  
If you select Azure Blob Storage, App_Data is saved in the Azure Blob Storage that you designate.

### Database Server
The metadata and intermediate data for the Bold BI site are saved on the database server. Bold BI supports these databases for the Meta and IMDB servers:

1. MySQL
2. MS SQL
3. PostgreSQL
 
The Backup and Restore Persistent Data section explains how to back up and restore each resource.

## Backup and Restore Persistent Data

Back up and restore each Bold BI persistent resource using the steps in this section. The infrastructure diagram and the persistent data locations show that Bold BI persistent information can be saved in:

1. Physical or Virtual Machine - File System/Mounted Path
2. DB Server - MS SQL/PostgreSQL/MySQL
3. Azure Blob Storage
4. ReadWriteMany Storage - SMB/NFS/EFS/File Store 

### Physical or Virtual Machine

When App_Data uses File Storage, App_Data is saved on the hosting machine itself. Back up the App_Data location, or the entire machine if needed. For a physical machine, take the backup from this location:

| Environment | App Data Local Path |
|-------------|----------------------------------------------------------|
| Windows     | `{Deployed Location}/BoldServices/App_Data/`             |
| Linux       | `/var/www/bold-services/application/`                    |

If you use a virtual machine (VM), take a complete snapshot of the VM, or back up only the directory listed above. The table lists vendor documentation for creating and restoring a VM snapshot.

| Resources                   | Reference Links                                                                                   |
|-----------------------------|---------------------------------------------------------------------------------------------------|
| AWS VM                      | Backup: [Creating Snapshot](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-creating-snapshot.html) <br> Restore: [Restoring an EC2 Instance](https://aws.plainenglish.io/a-step-by-step-guide-to-restoring-an-ec2-instance-from-a-snapshot-58922be4b3b6) |
| Azure VM                    | Backup: [Snapshot and Copy Managed Disk](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk?tabs=portal) <br> Restore: [Restoring a VM from Snapshot](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk?tabs=portal) |
| GCP VM                      | Backup: [Creating Windows Persistent Disk Snapshot](https://cloud.google.com/compute/docs/instances/windows/creating-windows-persistent-disk-snapshot) <br> Restore: [Restoring Snapshot](https://cloud.google.com/compute/docs/disks/restore-snapshot) |

### Database Server

For database server backup and restore, use the vendor documentation for your database type and deployment.

**On-Premises DB Server**

| Database Type               | Backup and Restore Documentation                                                     |
|-----------------------------|-------------------------------------------------------------------------------------|
| PostgreSQL     | [Backup and Restore](https://www.postgresql.org/docs/8.1/backup.html)               |
|  MS SQL         | [Backup and Restore of SQL Server Databases](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases?view=sql-server-ver16)  |
|  MySQL          | [Backup and Recovery Documentation](https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html) |

**Managed DB Server**

| Managed Database   |  Database Type| Backup and Restore Documentation                                                     |
|-----------------------------|-------------------------------------------------------------------------------------|----------------|
| AWS  | MySQL, MS SQL, PostgreSQL | Backup: [Create Snapshot of RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html) <br> Restore: [Restore RDS from Snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html) |
| Azure   | MySQL <br><br><br> MS SQL <br><br><br> PostgreSQL |Backup: [Backup MySQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-azure-mysql-flexible-server) <br> Restore: [Restore MySQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-azure-mysql-flexible-server-restore) <br><br> Backup: [Backup MSSQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-sql-server-database-azure-vms) <br> Restore: [Restore MSSQL Database](https://learn.microsoft.com/en-us/azure/backup/restore-sql-database-azure-vm)<br><br>Backup: [Backup PostgreSQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-azure-database-postgresql-flex) <br> Restore: [Restore PostgreSQL Database](https://learn.microsoft.com/en-us/azure/backup/restore-azure-database-postgresql-flex) |
| GCP  | MySQL <br><br><br> MS SQL <br><br><br> PostgreSQL   | Backup: [Backup MySQL Database](https://cloud.google.com/sql/docs/mysql/backup-recovery/backing-up) <br> Restore: [Restore MySQL Database](https://cloud.google.com/sql/docs/mysql/backup-recovery/restoring)<br><br> Backup: [Backup MSSQL Database](https://cloud.google.com/sql/docs/sqlserver/backup-recovery/backups) <br> Restore: [Restore MSSQL Database](https://cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)<br><br>Backup: [Backup PostgreSQL Database](https://cloud.google.com/sql/docs/postgres/backup-recovery/backups) <br> Restore: [Restore PostgreSQL Database](https://cloud.google.com/sql/docs/postgres/backup-recovery/restore) | 

### Azure Blob Storage

If you configured Azure Blob Storage when you set up the site, back up the Azure Blob.
| Azure Blob    |
|-----------------------------|
| Backup: [Configure and Manage Blob Backup](https://learn.microsoft.com/en-us/azure/backup/blob-backup-configure-manage) <br> Restore: [Blob Restore](https://learn.microsoft.com/en-us/azure/backup/blob-restore) |

### ReadWriteMany Storage

For a Kubernetes deployment, mount a ReadWriteMany persistent volume to store Bold BI App_Data. Use the vendor link for your cloud provider to back up and restore that storage volume.

| Cloud Storage               | Backup and Restore Documentation                                                     |
|-----------------------------|-------------------------------------------------------------------------------------|
| Elastic File Storage for EKS| [AWS Backup Documentation](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html) |
| Azure File Share for AKS    | [Azure File Share Backup](https://learn.microsoft.com/en-us/azure/backup/backup-afs) |
| GKE File Store for GKE      | [File Store Backup](https://cloud.google.com/filestore/docs/backup-restore)          |

## List of Changes Required for Using Restored Resources

Use this section to find the changes that may be needed at the environment and Bold BI application levels after you restore persistent data.

### Restore the App_Data

| Deployed In    | Restore                                                                                   |
|----------------|-------------------------------------------------------------------------------------------|
| Physical Machine | Replace the backed-up files in the installed `App_Data` directory.                           |
| Cloud VM        | If you restore the VM from the snapshot, make domain or IP changes at the application level, as described in Change Domain Mapping or IP Binding. If you restore only the `App_Data` directory, you can skip the domain or IP changes. |
| Docker          | Replace the backed-up files in the container-mounted host path.                              |
| Kubernetes      | Replace the restored persistent volume Azure File Share/EFS filesystem/Google File-store details in the deployment manifest or Helm chart, and redeploy the application. |

### Update Database Connection String

To update the database connection string, use the guidance in this section to reset the database connection for each environment.

If you backed up the database on another server and the database name stays the same, follow the linked support article to update both the UMS and tenant databases. [How to update the tenant database information in bulk in on-premise deployments](https://support.boldbi.com/kb/article/14255/how-to-update-the-tenant-database-information-in-bulk-in-on-premise-deployments).

If you backed up the databases on another server under different names, follow both the support article in the previous paragraph and the Reset Application Database article.

[Reset Application Database](/utilities/bold-bi-command-line-tools/reset-application-database/).

### Change Domain Mapping or IP Binding

- If you use a domain name and restore the server from the snapshot, you can map the new IP with the same domain name.
- If you host the application by IP address and the server IP has changed, update the IP address on the UMS administration page. Navigate to `URL/ums/administration` in the browser and confirm that the new URL is shown. If it is not, update the new URL on the administration page and save the changes.

![Bold BI Site Settings page with the Site URL field highlighted](/static/assets/installation-and-deployment/images/idp-url-binding.png)
