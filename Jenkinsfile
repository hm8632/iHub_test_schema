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
               sh 'gitversion /output buildserver'`
                script {
                        def props = readProperties file: 'gitversion.properties'

                        env.GitVersion_SemVer = props.GitVersion_SemVer
                        env.GitVersion_BranchName = props.GitVersion_BranchName
                        env.GitVersion_AssemblySemVer = props.GitVersion_AssemblySemVer
                        env.GitVersion_MajorMinorPatch = props.GitVersion_MajorMinorPatch
                        env.GitVersion_Sha = props.GitVersion_Sha
                    }
            }
        }
    }
}
