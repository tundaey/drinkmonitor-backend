#!/bin/bash
docker-compose run api knex migrate:latest --env development 
docker-compose run api knex seed:run --env development

docker-compose run api knex migrate:latest --env test 
docker-compose run api knex seed:run --env test