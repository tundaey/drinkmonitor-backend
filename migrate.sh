#!/bin/bash
docker-compose run prod_api knex migrate:latest --env development 
docker-compose run prod_api knex seed:run --env development