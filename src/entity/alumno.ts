import mongoose from 'mongoose';

const AlumnoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    matricula: { type: String, required: true },
});

const Alumno = mongoose.model('Alumno', AlumnoSchema);
export default Alumno;
