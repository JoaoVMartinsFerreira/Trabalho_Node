const Autor = require('../models/autor');

Autor.methods(['get', 'post', 'put', 'delete']);

Autor.updateOptions({ new: true, runValidators: true});

module.exports = Autor;