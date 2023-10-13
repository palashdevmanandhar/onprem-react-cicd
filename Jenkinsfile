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

    stage('Switch User') {
      steps {
        sh 'echo "9849" | su - "palashdm2"'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -f ./Dockerfile .'
      }
    }

  }
}