const Nota = require('../models/nota.model');

// Función para modificar una nota existente
const modificarNota = async (notaId, data) => {
    try {
        const notaModificada = await Nota.findByIdAndUpdate(
            notaId, 
            { 
                parcial: data.parcial,
                nota: data.nota,
                observacion: data.observacion,
                estado: data.estado,
                alumno: data.alumnoId,
                asignatura: data.asignaturaId
            },
            { new: true }
        ).populate('alumno asignatura');
        
        if (!notaModificada) {
            console.log("Nota no encontrada");
            return null;
        }

        return notaModificada;
    } catch (error) {
        console.error("Error al modificar la nota:", error);
        throw error;
    }
};

// Función para eliminar una nota existente
const eliminarNota = async (notaId) => {
    try {
        const notaEliminada = await Nota.findByIdAndDelete(notaId);

        if (!notaEliminada) {
            console.log("Nota no encontrada");
            return null;
        }

        return notaEliminada;
    } catch (error) {
        console.error("Error al eliminar la nota:", error);
        throw error;
    }
};

module.exports = {
    modificarNota,
    eliminarNota
};
