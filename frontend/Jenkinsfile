pipeline {
    agent any

    tools {
        nodejs 'nodejs-22'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Récupération du dépôt GitHub...'
                checkout scm
                sh 'git log -1 --oneline'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installation des dépendances npm...'
                sh 'npm install --no-audit --no-fund'
                sh 'echo "✅ $(ls node_modules | wc -l) paquets installés"'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Build de l\'application Next.js...'
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                echo '💾 Archivage des artefacts de build...'
                archiveArtifacts artifacts: '.next/**/*', fingerprint: true, allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline terminé avec succès !'
        }
        failure {
            echo '❌ Le pipeline a échoué.'
        }
        always {
            cleanWs()
        }
    }
}
