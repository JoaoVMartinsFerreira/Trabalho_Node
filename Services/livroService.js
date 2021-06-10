const Livro = require('../models/livro');


//Create REST API, adds CRUD to Mongog's schema
Livro.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Livro.updateOptions({new: true, runValidators: true});

module.exports = Livro;