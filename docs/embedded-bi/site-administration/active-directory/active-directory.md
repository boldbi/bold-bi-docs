---
title: Active Directory Settings – Embedded BI | Bold BI Learning
description: Learn the required Active Directory details and how to configure Active Directory with Bold BI Server.
platform: bold-bi
documentation: ug
---

# Active Directory Settings

This section explains what are the [Active Directory](https://msdn.microsoft.com/en-us/library/windows/desktop/aa746492) details needed and how to configure Active Directory with Bold BI Server.

![Active Directory Settings](/static/assets/embedded/site-administration/images/active-directory-settings.png)

You will need the below Active Directory details to configure Bold BI with your Active Directory:

* Username and Password - username and password of the user present in the Active Directory domain.

* LDAP URL - IP or DNS name of the Windows Server where you have Active Directory Domain Services enabled. For example, `LDAP://192.168.1.1`

* Distinguished Name - FQDN of the Active Directory.   

* Enable/Disable SSL connection to Active Directory - Enable this checkbox, if your Windows Server needs SSL connection to connect.  

* Port Number - Default port for Non-SSL connections is 389 and for SSL connections is 636

## How to find FQDN
Follow the below steps to find out the Distinguished Name of your Active Directory.  

1. Go to Run(Win + R) and type `sysdm.cpl` in a machine which is connected to the Active Directory or in the Windows Server where you have Active Directory Domain Services enabled  
![Run sysdm.cpl](/static/assets/embedded/site-administration/images/active-directory-settings-fqdn-1.png)

2. The `System Properties` dialog will be opened and you can find the Distinguished Name labeled as `Domain`     
![Distinguished Name - Domain](/static/assets/embedded/site-administration/images/active-directory-settings-fqdn-2.png)
    
You can search either all the users in the domain or users in the specific group that belongs to an organization in the specific domain.

For example, if your Domain is www.example.com, then to search all the users of the domain you have to type in as `dc=www,dc=example,dc=com`.

To search the users in a specific group (Eg:TestGroup) of an organization (Eg:Syncfusion) in the domain www.example.com, you can type in as `CN=TestGroup,OU=Syncfusion,DC=www,DC=example,DC=com`

 The following table lists the attribute types.

  <table>
    <tr>
      <td>
       <a>String</a>
      </td>
      <td>
       <a>Attribute Type</a>
      </td>
    </tr>
    <tr>
      <td>
       <a>CN</a>
      </td>
      <td>
       commonName
      </td>
    </tr>
    <tr>
      <td>
       <a>OU</a>
      </td>
      <td>
       organizationalUnitName
      </td>
    </tr>
    <tr>
      <td>
       <a>DC</a>
      </td>
      <td>
       domainComponent
      </td>
    </tr>
  </table>

  This filter will search and list the users in the group named TestGroup of an organization Syncfusion in the domain www.example.com.

