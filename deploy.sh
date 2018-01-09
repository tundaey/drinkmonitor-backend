#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

(
  cd "$DIR/.." # Go to project dir.

  ssh $SSH_USERNAME@$DROPLET_IP -o StrictHostKeyChecking=no <<-EOF
    cd $SSH_PROJECT_FOLDER
    docker-compose -f docker-compose-review.yml pull
    docker-compose stop
    docker-compose rm -f
    docker-compose -f docker-compose.review.yml up --build -d
EOF
)