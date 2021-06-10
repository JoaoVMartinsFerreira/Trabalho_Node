const express = require('express');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/', router);

  //Registering API methods in router
  const livroService = require('../services/livroService');
  livroService.register(router, '/livro');

const generoService = require('../Services/generoService')  ;
generoService.register(router, '/genero');

const autorService = require('../Services/autorService');
autorService.register(router, '/autor');

const instanciaService = require('../Services/instanciaService');
instanciaService.register(router, '/instancialivro');
}