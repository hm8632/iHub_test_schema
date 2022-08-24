pipeline {
    agent any

    stages {
        stage('Init') {
            steps {
                echo 'Initializing..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                var a
                for (a=1, a<10, a++))
                {
                  echo a
                }
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
        stage('Publish') {
            steps {
                echo 'Publishing..'
                echo 'Publishing to web location ..'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Cleaning..'
                echo 'Cleaning old builds'
            }
        }
    }
}