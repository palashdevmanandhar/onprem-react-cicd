pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/palashdevmanandhar/onprem-react-cicd', branch: 'main')
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'echo "9849" | su - "root" -c "docker build -f ./Dockerfile ."'
      }
    }

  }
}