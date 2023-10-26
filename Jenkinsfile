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
        sh 'sudo docker build -f Dockerfile . -t registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest'
      }
    }

    stage('Push to Dockerhub') {
      steps {
        sh 'docker push registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest'
      }
    }

    stage('SSH into Remote Server') {
      steps {
        script {
          def remoteServer = '192.168.50.143'
          def remoteUser = 'lisadmin'

          // SSH key should be configured in Jenkins credentials as a username with private key
          sshCommand remote: remoteServer, user: remoteUser, command: '''
cd /home/lisadmin/react-deployment
sudo docker stop react_container_01
sudo docker rm react_container_01
sudo docker pull registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest
sudo docker run -d --name=react_container_01 -p 3002:3000 registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest
'''
        }

      }
    }

  }
}