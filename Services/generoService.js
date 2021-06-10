const Genero = require('../models/genero');


Genero.methods(['get', 'post', 'put', 'delete']);

Genero.updateOptions({new: true, runValidators: true});

module.exports = Genero;