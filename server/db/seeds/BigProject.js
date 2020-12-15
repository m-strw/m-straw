exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('Content_bigpro').del()

      .then(function () {
        // Inserts seed entries
        
        return knex('Content_bigpro').insert([
        
        ])
    })
}