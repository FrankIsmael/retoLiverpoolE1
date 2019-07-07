const mongoose = require('mongoose')

const articuloSchema = new mongoose.Schema({
  imagen:{type: String, required: true},
  nombre:{type: String, required: true},
  precio: {type: Number, required: true}
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Articulo',articuloSchema)