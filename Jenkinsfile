pipeline {
    agent any

    stages {
        stage('Init') {
            steps {
                echo 'Initializing..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo 'Running Json Validator of .json files..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                echo 'Adding $id tags to files.'
            }
        }
        stage('Publish ') {
            steps {
                echo 'Publishing..'
                echo 'Publishing files to web location ..'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Cleaning up ..'
                echo 'Cleaning old builds'
            }
        }
    }
}