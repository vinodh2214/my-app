pipeline {
    agent any

    stages {

        stage('Identify Build') {
            steps {
                script {
                    if (env.CHANGE_ID) {
                        echo "🔁 Pull Request Build: ${env.CHANGE_ID}"
                    } else {
                        echo "🚀 Branch Build: ${env.BRANCH_NAME}"
                    }
                }
            }
        }

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify') {
            steps {
                sh '''
                echo "Branch: $BRANCH_NAME"
                echo "PR ID: $CHANGE_ID"
                date
                ls -la
                '''
            }
        }
    }
}
