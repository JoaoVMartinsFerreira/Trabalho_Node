
const restful = require('node-restful');

const mongoose = restful.mongoose;
var Schema = mongoose.Schema;

const instanciaSchema = new Schema({
    livro: { type: Schema.Types.ObjectId,ref:'Livro', required: true },
    status: { type:String,
               enum: ["Em uso","Disponivel"],
                           default:"Disponivel",required: false },
    devolvido: { type: Date, required: true },
    imprint: { type: String, required: true },
    url: { type: String, required: true },
});

module.exports = restful.model('Instancia', instanciaSchema);