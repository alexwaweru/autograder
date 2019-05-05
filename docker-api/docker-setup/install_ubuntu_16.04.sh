#!/bin/sh

###########################
# Docker SETUP
###########################
sudo apt-get update
sudo apt-get install -y docker.io

echo "Docker Setup complete"

###########################
# NodeJS setup
###########################
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm
echo "NodeJS setup Complete"

###########################
# Start Docker
###########################
sudo chmod 777 ../API/DockerTimeout.sh
sudo chmod 777 ../API/Payload/script.sh
sudo chmod 777 ../API/Payload/javaRunner.sh
sudo chmod 777 update_docker.sh

sudo systemctl unmask docker.service
sudo systemctl unmask docker.socket
sudo systemctl start docker.service
./update_docker.sh
