pipeline {
    agent any

    stages {

        stage('Identify Build') {
            steps {
                script {
                    if (env.CHANGE_ID) {
                        echo "🔁 PR Build: ${env.CHANGE_ID}"
                    } else {
                        echo "🚀 Branch Build: ${env.BRANCH_NAME}"
                    }
                }
            }
        }

        stage('Verify') {
            steps {
                bat 'echo Build is working on Windows!'
            }
        }
    }
}
