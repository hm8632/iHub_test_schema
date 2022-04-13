pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building.....'
                echo "BUILD_NUMBER= ${env.BUILD_NUMBER}"
                script {
                       def files = findFiles(glob: '**/*.json')
                       files.each()  {
                                        if(it.name != "styleguide.json"  && it.name != "spectral.json"){
                                            echo it.name
                                        }
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
