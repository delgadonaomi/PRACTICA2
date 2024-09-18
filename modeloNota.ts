const mongoose = require('mongoose');

const NotaSchema = new mongoose.Schema({
    parcial: { type: String, required: true },
    nota: { type: Number, required: true },
    observacion: String,
    estado: { type: String, required: true },
    alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true },
    asignatura: { type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura', required: true }
});

const Nota = mongoose.model('Nota', NotaSchema);
module.exports = Nota;
