const restful = require('node-restful')
const mongoose = restful.mongoose;
var Schema = mongoose.Schema;

const autorSchema = new  Schema({
nome:{ type: String, required:true },
sobrenome:{ type: String, required:true },
dataNascimento:{ type: Date, required:true },
dataMorte: { type: Date, required: false },
lifespan: { type: String, required:true },
url: { type: String, required:true },
});

module.exports = restful.model('Autor', autorSchema);