pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
         stage('test') {
            steps {
                sh '/usr/local/bin/jenkins_scripts/ihub.php'
            }
        }
         stage('deploy') {
            steps {
                sh 'node --version'
            }
        }
    }
}
