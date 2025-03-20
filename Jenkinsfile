pipeline {
    agent any  

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/midhunbinoy66/cicd0.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'ng build --configuration production'
            }
        }

        stage('Deploy to Server') {
            steps {
                sh 'cp -r dist/cicd0/* /var/www/angular-app/' 
                sh 'sudo systemctl restart nginx'  
            }
        }
    }
}
