pipeline {
    agent any

    // 👇 This enables GitHub webhook trigger
    triggers {
        githubPush()
    }

    stages {

        stage('Triggered ✅') {
            steps {
                echo "🚀 Pipeline triggered from GitHub push!"
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/vinodh2214/jenkins.git'
            }
        }

        stage('Verify') {
            steps {
                sh '''
                echo "Build triggered at:"
                date
                ls -la
                '''
            }
        }
    }
}
