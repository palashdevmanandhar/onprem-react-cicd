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

    stage('Docker Image Build') {
      steps {
        sh 'sudo docker build -f Dockerfile . -t palashdm/onprem-react-cicd:latest'
      }
    }

    stage('Login to DockerHub') {
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

    stage('Push to Dockerhub') {
      steps {
        sh 'docker push palashdm/onprem-react-cicd:latest'
      }
    }

  }
  environment {
    DOCKERHUB_USER = 'palashdm'
    DOCKERHUB_PASSWORD = 'Silicon18v@lley'
  }
}