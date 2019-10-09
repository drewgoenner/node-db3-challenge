const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes')
      .where({ id })
      .first();
};

function findSteps(id) {
    return db('steps as st')
      .join('schemes as s', 'st.scheme_id', 's.id')
      .select('s.scheme_name as Scheme', 'st.step_number as Step', 'st.instructions as Instructions')
      .where({ scheme_id: id})
      .orderBy('step');
};

function add(scheme) {
    return db('schemes')
      .insert(scheme, 'id');
}

function update(changes, id) {
    return db('schemes') 
      .where({ id })
      .insert(changes);
    
};

function remove(id) {
    return db('schemes')
      .where({ id })
      .del();
};