pipeline {
    agent any  

    stages {
        stage('Setup Node.js & Angular') {
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -'  
                sh 'sudo apt install -y nodejs'
                sh 'node -v'  
                sh 'npm install -g @angular/cli'  
                sh 'ng version'  
            }
        }

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
