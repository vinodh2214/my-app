pipeline {
    agent any

    stages {

        stage('Detect PR') {
            steps {
                script {
                    if (env.CHANGE_ID) {
                        echo "🔁 Pull Request Detected!"
                        echo "PR ID: ${env.CHANGE_ID}"
                        echo "Source Branch: ${env.CHANGE_BRANCH}"
                        echo "Target Branch: ${env.CHANGE_TARGET}"
                    } else {
                        echo "🚫 Not a PR build"
                        echo "Branch: ${env.BRANCH_NAME}"
                    }
                }
            }
        }

        stage('Log Info') {
            steps {
                echo "📦 Repository: ${env.JOB_NAME}"
                echo "🌿 Branch: ${env.BRANCH_NAME}"
                echo "👤 Build Triggered By PR: ${env.CHANGE_ID ?: 'No'}"
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline executed successfully"
        }
        failure {
            echo "❌ Pipeline failed"
        }
    }
}