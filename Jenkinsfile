timestamps {

node () {

	stage ('iHub_schema - Checkout') {
 	 checkout([$class: 'GitSCM', branches: [[name: '*/dev']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '', url: 'https://github.com/hm8632/iHub_test_schema.git']]]) 
	}
	stage ('iHub_schema - Build') {
 			// Shell build step
sh """ 
for i in $( git diff --name-only $GIT_PREVIOUS_COMMIT $GIT_COMMIT )
do
  echo "Working on $i file..."
  /usr/bin/python3 -c 'import sys,json; json.load(sys.stdin)' < $i
done 
 """ 
	}
}
}