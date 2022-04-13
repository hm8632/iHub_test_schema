pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building.....'
                echo "BUILD_NUMBER= ${env.BUILD_NUMBER}"
                script {
                        def script_output = sh(returnStdout: true, script: '''
                            #!/bin/bash
                            ls *.json
                            ''')
                script_output.each() {
                                            echo it
                                     }
                def files = findFiles(glob: '**/*.json')
                files.each()         {
                                            echo it.name
                                     }
                }
                
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
