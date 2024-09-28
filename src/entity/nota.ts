import mongoose from 'mongoose';

const NotaSchema = new mongoose.Schema({
    alumnoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true },
    asignaturaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura', required: true },
    calificacion: { type: Number, required: true },
});

const Nota = mongoose.model('Nota', NotaSchema);
export default Nota;
