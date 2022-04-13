pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building.....'
                echo "BUILD_NUMBER= ${env.BUILD_NUMBER}"
                sh '''#!/bin/bash
                 echo "hello world" 
                   '''
            }
        }
     stage('Test') {
            steps {
                echo 'Testing.......'
            }
        }
     stage('Deploy') {
            steps {
                echo 'Deploying..........'
            }
        }   
        
     }
}
