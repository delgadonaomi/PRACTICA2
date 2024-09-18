const mongoose = require('mongoose');

const AsignaturaSchema = new mongoose.Schema({
    descripcion: { type: String, required: true },
    nivel: { type: String, required: true },
    creditos: { type: Number, required: true }
});

const Asignatura = mongoose.model('Asignatura', AsignaturaSchema);
module.exports = Asignatura;
