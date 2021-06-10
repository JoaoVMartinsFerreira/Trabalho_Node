const Instancia = require('../models/livroInstancia');


Instancia.methods(['get', 'post', 'put', 'delete']);

Instancia.updateOptions({new: true, runValidators: true});

module.exports = Instancia;