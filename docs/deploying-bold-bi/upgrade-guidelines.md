---
layout: post
title:  Upgrading versions of Bold BI Application | Bold BI Docs
description: Learn here about the information of upgrading from older Bold BI application version to a newer version, detailed steps and more details for the smooth update.
platform: bold-bi
documentation: ug
---
# Upgrade Guidelines
## Overview
This section provides upgrade guidance that should be followed before proceeding with the Bold BI upgrade on the production environment.
- Save all open settings and unsaved items.
- Ensure that no one is currently working with dashboards.
- Inform users about the maintenance time.
- Take a backup of the persistent data.

Taking a backup of the persistent data helps us to restore Bold BI to a previous version in case any breaking issues are found in the latest version. You need to know where the persistent data of Bold BI is saved to take a backup. The following diagram demonstrates the Bold BI infrastructure architecture.

![Architecture of Bold BI](/static/assets/installation-and-deployment/images/architecture-bold-bi.png)

The above diagram shows that Bold BI persistent information is saved in the App_data and DB server. The next section will provide details about the persistent data, its location, and details of the information saved there.

## Bold BI Persistent Data

Bold BI persistent data, which includes users, groups, dashboards, schedules, and application-related data, is saved in the following resources:

1. App_Data
2. Database Server

### App_Data 

All dashboard resource information is saved in the App_Data location and can be saved in any of the following supported options:

1. File Storage
2. Azure Blob storage

![File storage](/static/assets/installation-and-deployment/images/file-storage.png)

#### File Storage
The File Storage typically refers to the storage that contains Bold BI application data. It can be a local file storage or managed cloud storage based on the deployment environment. 

| Environment | App Data Location    |
|-------------|----------------------------------------------------------|
| Windows     | `{Deployed Location}/BoldServices/App_Data/`             |
| Linux       | `/var/www/bold-services/application/`                    |
| Docker      | Mounted Path/Mounted Storage   |
| Kubernetes  | File Share |
| Azure App Service | Azure Blob |

#### Azure Blob storage  
By selecting this option, the APP_Data information will be saved in the designated Azure blob storage.

### Database Server
The metadata and intermediate data details of the Bold BI site will be saved on the database server. Bold BI supports the following databases for use as Meta and IMDB servers:

1. My SQL
2. MS SQL
3. Postgres SQL
 
The upcoming section will provide guidance on how to take backup and restore Bold BI persistent resources.

## Backup and Restore Persistent Data

This section will explore how to take backup and restore Bold BI persistent resources. From the infrastructure diagram and persistent data saving location, you can understand that Bold BI persistent information can be saved in:

1. Physical or Virtual Machine - File System/Mounted Path
2. DB Server - MS SQL/ Postgres SQL/ My SQL
3. Azure Blob Storage
4. ReadWriteMany Storage- SMB/NFS/EFS/File Store 

### 1. Physical or Virtual Machine

When using the App_Data storage type as File Storage, the App_Data information will be saved on the hosting machine itself. Therefore, it is important to take a backup of the App_Data location or the entire machine as needed. For a physical machine, you can take a backup from the following location:

| Environment | App Data Local Path |
|-------------|----------------------------------------------------------|
| Windows     | `{Deployed Location}/BoldServices/App_Data/`             |
| Linux       | `/var/www/bold-services/application/`                    |

If you are using a virtual machine (VM), you can either take a complete snapshot of the VM or only back up the directory mentioned above. Find the help links below to take a snapshot of the VM.

| Resources                   | Reference Links                                                                                   |
|-----------------------------|---------------------------------------------------------------------------------------------------|
| AWS VM                      | Backup: [Creating Snapshot](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-creating-snapshot.html) <br> Restore: [Restoring an EC2 Instance](https://aws.plainenglish.io/a-step-by-step-guide-to-restoring-an-ec2-instance-from-a-snapshot-58922be4b3b6) |
| Azure VM                    | Backup: [Snapshot and Copy Managed Disk](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk?tabs=portal) <br> Restore: [Restoring a VM from Snapshot](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk?tabs=portal) |
| GCP VM                      | Backup: [Creating Windows Persistent Disk Snapshot](https://cloud.google.com/compute/docs/instances/windows/creating-windows-persistent-disk-snapshot) <br> Restore: [Restoring Snapshot](https://cloud.google.com/compute/docs/disks/restore-snapshot) |

### 2. Database Server

For DB server backup and restore, refer to the following documentation link based on your DB kind and type.

#### On-premise DB Server

| Database Type               | Backup and Restore Documentation                                                     |
|-----------------------------|-------------------------------------------------------------------------------------|
| PostgreSQL     | [Backup and Restore](https://www.postgresql.org/docs/8.1/backup.html)               |
|  MS SQL         | [Backup and Restore of SQL Server Databases](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases?view=sql-server-ver16)  |
|  My SQL          | [Backup and Recovery Documentation](https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html) |

#### Managed DB Server

| Managed Database   |  Database Type| Backup and Restore Documentation                                                     |
|-----------------------------|-------------------------------------------------------------------------------------|----------------|
| AWS  | My SQL, MS SQL, PostgreSQL | Backup: [Create Snapshot of RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html) <br> Restore: [Restore RDS from Snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html) |
| Azure   | My SQL <br><br><br> MS SQL <br><br><br> PostgreSQL |Backup: [Backup MySQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-azure-mysql-flexible-server) <br> Restore: [Restore MySQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-azure-mysql-flexible-server-restore) <br><br> Backup: [Backup MSSQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-sql-server-database-azure-vms) <br> Restore: [Restore MSSQL Database](https://learn.microsoft.com/en-us/azure/backup/restore-sql-database-azure-vm)<br><br>Backup: [Backup PostgreSQL Database](https://learn.microsoft.com/en-us/azure/backup/backup-azure-database-postgresql-flex) <br> Restore: [Restore PostgreSQL Database](https://learn.microsoft.com/en-us/azure/backup/restore-azure-database-postgresql-flex) |
| GCP  | My SQL <br><br><br> MS SQL <br><br><br> PostgreSQL   | Backup: [Backup MySQL Database](https://cloud.google.com/sql/docs/mysql/backup-recovery/backing-up) <br> Restore: [Restore MySQL Database](https://cloud.google.com/sql/docs/mysql/backup-recovery/restoring)<br><br> Backup: [Backup MSSQL Database](https://cloud.google.com/sql/docs/sqlserver/backup-recovery/backups) <br> Restore: [Restore MSSQL Database](https://cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)<br><br>Backup: [Backup PostgreSQL Database](https://cloud.google.com/sql/docs/postgres/backup-recovery/backups) <br> Restore: [Restore PostgreSQL Database](https://cloud.google.com/sql/docs/postgres/backup-recovery/restore) | 

### 3. Azure Blob Storage

If you have configured Azure Blob storage when setting up the site, it is necessary to back up the Azure Blob.
| Azure Blob    |
|-----------------------------|
| Backup: [Configure and Manage Blob Backup](https://learn.microsoft.com/en-us/azure/backup/blob-backup-configure-manage) <br> Restore: [Blob Restore](https://learn.microsoft.com/en-us/azure/backup/blob-restore) |

### 4. ReadWriteMany Storage

For Kubernetes deployment, you need to mount the ReadWriteMany persistent volume to store Bold BI App_Data information. You can find the documentation link for backing up and restoring the ReadWriteMany storage volume based on your cloud provider.

| Cloud Storage               | Backup and Restore Documentation                                                     |
|-----------------------------|-------------------------------------------------------------------------------------|
| Elastic File Storage for EKS| [AWS Backup Documentation](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html) |
| Azure File Share for AKS    | [Azure File Share Backup](https://learn.microsoft.com/en-us/azure/backup/backup-afs) |
| GKE File Store for GKE      | [File Store Backup](https://cloud.google.com/filestore/docs/backup-restore)          |

## List of Changes Required for Using Restored Resources

This section describes the list of possible changes required in the environment and Bold BI application level for using restored persistent data resources.

### 1. Restore the App_Data

| Deployed In    | Restore                                                                                   |
|----------------|-------------------------------------------------------------------------------------------|
| Physical Machine | Replace the backed-up files in the installed `App_Data` directory.                           |
| Cloud VM        | If you restore the VM from the snapshot, you need to make domain or IP changes in the application level as described below. If you only restored the `App_Data` directory, you can skip the domain or IP changes. |
| Docker          | Replace the backed-up files in the container-mounted host path.                              |
| Kubernetes      | Replace the restored persistent volume Azure File Share/EFS filesystem/Google File-store details in the deployment manifest or Helm chart, and redeploy the application. |

### 2. Update Database Connection String

To update the database connection string, please refer to the guidance document below to reset the database connection for different environments.

If you have backed up the database on another server and the database name remains the same, following this KB article is sufficient to update both the UMS and tenant databases. [How to update the tenant database information in bulk in on-premise deployments](https://support.boldbi.com/kb/article/14255/how-to-update-the-tenant-database-information-in-bulk-in-on-premise-deployments).

If you have backed up the databases on another server with different names, you need to follow both the above KB article and the documentation below.

[Reset Application Database](https://help.boldbi.com/utilities/bold-bi-command-line-tools/reset-application-database/).

### 3. Change Domain Mapping or IP Binding

- If you use a domain name and restore the server from the snapshot, you can map the new IP with the same domain name.
- If you are hosting the application using the IP address and the server IP has changed, you need to update the IP address in the UMS administration page. Navigate to `URL/ums/administration` in the browser and ensure that the new URL is updated. If not, update the new URL on the administration page and save the changes.

![IDP URL Binding](/static/assets/installation-and-deployment/images/idp-url-binding.png)