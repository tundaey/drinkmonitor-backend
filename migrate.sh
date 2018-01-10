#!/bin/bash
docker-compose -f docker-compose-review.yml run prod_api knex migrate:latest --env development 
docker-compose -f docker-compose-review.yml run prod_api knex seed:run --env development