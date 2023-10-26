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
                def remoteServer = '192.168.50.181'
                def remoteUser = 'yco.user'
                
                // sh "cat /home/palash.manandhar/.ssh/id_rsa.pub"
                // sh "hostname"
                sh "ssh ${remoteUser}@${remoteServer} 'cd /home/yco.user/react-deployment && sudo docker stop react_container_01 && sudo docker rm react_container_01 &&  sudo docker pull registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest && sudo docker run -d -p 3000:3000 registry-inteliome.yco.com.np:5000/palashdm/onprem-react-cicd:latest'"
            }
        }

      
    }

  }
}