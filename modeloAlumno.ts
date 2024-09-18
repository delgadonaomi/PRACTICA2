const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    identificacion: { type: String, required: true }
});

const Alumno = mongoose.model('Alumno', AlumnoSchema);
module.exports = Alumno;
