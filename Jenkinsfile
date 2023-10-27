pipeline {
  agent any
  triggers {
    pollSCM '*/5 * * * *'
  }
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
        sh 'sudo docker build -f Dockerfile . -t registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest'
      }
    }

    stage('Docker Image Push') {
      steps {
        sh 'docker push registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest'
      }
    }

    stage('SSH into Remote Server') {
      steps {
        script {
          def remoteServer = '192.168.50.181'
          def remoteUser = 'yco.user'

          sh "ssh ${remoteUser}@${remoteServer} 'docker stop react_container_01 && docker rm react_container_01'"

          // Pull the latest image and run the container
          sh "ssh ${remoteUser}@${remoteServer} 'docker pull registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest && docker run -d --name react_container_01 -p 3000:3000 registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest'"
        }
      }
    }
  }
}