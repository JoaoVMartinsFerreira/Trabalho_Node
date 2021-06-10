const restful = require('node-restful')
const mongoose = restful.mongoose;
var Schema = mongoose.Schema;
const generoSchema = new Schema({
    nome: { type: String, required: true },
    url: { type: String, required: true },
    });

module.exports = restful.model('Genero',generoSchema);