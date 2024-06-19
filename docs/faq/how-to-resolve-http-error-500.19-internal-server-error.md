---
layout: post
title: Resolve HTTP Error 500.19 – Internal Server Error | Bold BI Docs
description: This page summarizes about how to resolve HTTP Error 500.19 – Internal Server Error while running the Bold BI On-Premise application in your machine.
platform: bold-bi
documentation: ug
---

# How to resolve HTTP Error 500.19 – Internal Server Error

When you run the Bold BI application after it has been installed, you may encounter an HTTP 500.19 error if your Microsoft.NET Core installation is corrupted.

![HTTP Error](/bold-bi-docs/static/assets/embedded/faq/images/http-error.png#max-width=75%)       

Follow the given steps to repair the Microsoft .NET Core installation:

1. Go to **Control Panel** and select the **Uninstall a program** option.

    ![Uninstall a Program](/bold-bi-docs/static/assets/embedded/faq/images/uninstall-a-program.png#max-width=75%)

2. In the next screen, search for **Microsoft .NET Core 3.1.x – Windows Server Hosting**.

3. Right-click the program and choose the **Change** option from the menu.

    ![Windows Server Hosting Change](/bold-bi-docs/static/assets/embedded/faq/images/window-server-hosting-change.png#max-width=75%)

4. Select the **Repair** option in the dialogue box and wait for the process to finish.

    ![Windows Server Hosting Repair](/bold-bi-docs/static/assets/embedded/faq/images/windows-server-hosting-repair.png#max-width=50%)

5. After the repair is complete, try accessing the Bold BI site.

>**Note:** If the **Microsoft.NET Core Windows Hosting Bundle** bundle is not already installed on your machine, download and install the **Windows Hosting Bundle** from this [link](https://dotnet.microsoft.com/en-us/download/dotnet/3.1). </br></br>
> ![Windows Hosting Bundle](/bold-bi-docs/static/assets/embedded/faq/images/windows-hosting-bundle.png#max-width=75%)