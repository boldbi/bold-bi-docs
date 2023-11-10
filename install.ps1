function waitUntillInstallation {
    Write-Host "Function has been called"
    
    $installComplete = 0

while($installComplete -le 1) 
{
    Write-Host "Test"
    $msi = Get-Process msiexec -ErrorAction SilentlyContinue
    if ($msi) {
        Sleep(10)
    }
    else
    {
        $installComplete = 2
    }

}
}

#Create Software folder for download
New-Item -ItemType Directory -Force -Path C:/Software
& { (New-Object System.Net.WebClient).DownloadFile('https://www.python.org/ftp/python/3.8.3/python-3.8.3-amd64.exe', 'C:/Software/pythoninstaller-3.8.3-amd64.exe') }
dir C:/Software
C:/Software/pythoninstaller-3.8.3-amd64.exe /quiet /dir=C:\Software\Python
Sleep(100)

waitUntillInstallation

# VS 2022 Build tools installation
#& { (New-Object System.Net.WebClient).DownloadFile('https://aka.ms/vs/17/release/vs_BuildTools.exe', 'C:/Software/vs_BuildTools.exe') }
#dir C:/Software

#C:/Software/vs_BuildTools.exe --nocache --wait --noUpdateInstaller --noWeb --allWorkloads --includeRecommended --includeOptional --quiet --norestart
#Sleep(200)

#waitUntillInstallation

Write-Host "Software installation completed"
dir "C:/Program Files"
dir "C:/Program Files (x86)"