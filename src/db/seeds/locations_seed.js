
exports.seed = function(knex, Promise) {
  return knex('locations').del()
  .then(() => {
    return knex('locations').insert({
      longitude: '52.477999',
      latitude: '-1.898754',
    });
  })
};
