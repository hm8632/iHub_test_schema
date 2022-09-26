pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh '/usr/local/bin/jenkins_scripts/validate_and_reference_schema.php'
            }
        }
         stage('test') {
            steps {
                sh '/usr/local/bin/jenkins_scripts/create_cvs_from_schema.php'
            }
        }
         stage('deploy') {
            steps {
               sh 'node --version '               
            }
        }
    }
}
