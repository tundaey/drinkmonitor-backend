#!/bin/bash

ssh $SSH_USERNAME@$DROPLET_IP -o StrictHostKeyChecking=no <<-EOF
    cd $SSH_PROJECT_FOLDER
    docker-compose -f docker-compose-review.yml pull
    docker-compose stop
    docker-compose rm -f
    docker-compose -f docker-compose.review.yml up --build -d
EOF