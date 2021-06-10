
const restful = require('node-restful');
const mongoose = restful.mongoose;
var Schema = mongoose.Schema;

const livroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: Schema.Types.ObjectId,ref:'Autor', required: true },
  isbn: {type: String, required: true},
  genero: [{type: Schema.Types.ObjectId, ref: 'Genero'}],
  url: { type: String, required: true},
  });

module.exports = restful.model('Livro', livroSchema);

