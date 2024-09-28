import mongoose from 'mongoose';

const AsignaturaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true },
});

const Asignatura = mongoose.model('Asignatura', AsignaturaSchema);
export default Asignatura;
