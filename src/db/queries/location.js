const knex = require('../connection')

function getAllLocations(){
    return knex('locations').select('*')
}

function addLocation(location){
    return knex('locations')
    .insert(location)
    .returning('*');
}


module.exports = {
    getAllLocations,
    addLocation
}