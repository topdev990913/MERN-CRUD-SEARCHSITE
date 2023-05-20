const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  RUT: {
    type: Number
  },
  DV: {
    type: String
  },
  NOMBRE: {
    type: String
  },
  DIRECCION: {
    type: String
  },
  COMUNA: {
    type: String
  },
  REGION: {
    type: String
  },
  SALUD: {
    type: String
  },
  Fec_Nac: {
    type: Number
  },
  CORREO: {
    type: String
  },
  CELULAR: {
    type: Number
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('users', userSchema)