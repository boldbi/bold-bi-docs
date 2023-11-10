node('BoldBI')
{
 timestamps {
     timeout(time: 7200000, unit: 'MILLISECONDS') {
        string status="";
        try {        
            stage 'Import'
                println("Reports Platform Document Validation");
			    git url: 'https://github.com/bold-bi/bold-bi-shared-groovy.git', branch: 'master', credentialsId: env.GithubCredentialID
			    shared = load 'src/shared.groovy'    

            stage 'Checkout' 
                try {
                    gitlabCommitStatus('Checkout') {
                        checkout scm
                    }
                }
                catch(Exception e) {
                    status='Checkout-Failed'
					currentBuild.result = 'FAILURE'
                }
		if(currentBuild.result != 'FAILURE') {		   
			stage('Install Software') {
				try
				{
					nodejs(nodeJSInstallationName: 'nodejs-16.17.0') {
					    bat 'npm config ls'
					}

					env.PATH = "C:\\tools\\jenkins.plugins.nodejs.tools.NodeJSInstallation\\nodejs-16.17.0;${env.PATH}"
					bat 'npm -v'
					bat 'npm install gulp -g'
                    bat 'powershell.exe -ExecutionPolicy ByPass -File ./Install.ps1'
                    env.PATH = "C:\\Software\\Python\\Python.exe;${env.PATH}"
				}
				 catch(Exception e)
				 {
				    echo "Exception in software installation stage \r\n"+e
					currentBuild.result = 'FAILURE'
				 }
			}
		}
				
		    	if(currentBuild.result != 'FAILURE') {
                    stage 'Install'
                        try {	
						    gitlabCommitStatus('Install') {                  
							    shared.install();
								println("Finished Installation");
						    }
					    }
					    catch(Exception e) {
                            gitlabCommitStatus('failed') {
    						    status='Install-Failed'
						        currentBuild.result = 'FAILURE'
                            }
					    }                    
                }
                if(currentBuild.result != 'FAILURE') {
                    stage 'Test'
                        try {
                            gitlabCommitStatus('Test') {
                               shared.test();
                               println("Finished Test");
                            }
                        }
                        catch(Exception e) {
                            gitlabCommitStatus('failed') {
                                status = 'Test-Failed'
                                currentBuild.result = 'FAILURE'
                            }
                        }
                }
                if(currentBuild.result != 'FAILURE') {
                    stage 'Build'
                        try {
                            shared.build();
                            println("Finished 'Build'");
                        }
                        catch(Exception e) {
                            gitlabCommitStatus('failed') {
                                status = 'Build-Failed'
                                currentBuild.result = 'FAILURE'
                            }
                        }
                }
                stage 'Delete WorkSpace' 
					// Archiving artifacts when the folder was not empty
					gitlabCommitStatus("Archiving artifacts") {
					    def files = findFiles(glob: '**/cireports/**/*.*')
					    if(files.size() > 0) { 		
						    archiveArtifacts artifacts: 'cireports/', excludes: null 		
					    }
					}
                deleteDir()                            
            
        }
        catch(Exception e) {
            println(e)
		    gitlabCommitStatus('failed') {
    			deleteDir()
			    error('Build Failed')
		    }
        }
     }
  }
}
