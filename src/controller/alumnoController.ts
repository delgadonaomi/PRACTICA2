import { Request, Response } from 'express';
import Alumno from '../models/Alumno';

// Consulta general (GET)
export const getAllAlumnos = async (req: Request, res: Response) => {
    const alumnos = await Alumno.find();
    res.json(alumnos);
};

// Consulta individual (GET)
export const getAlumnoById = async (req: Request, res: Response) => {
    const alumno = await Alumno.findById(req.params.id);
    res.json(alumno);
};

// Crear (POST)
export const createAlumno = async (req: Request, res: Response) => {
    const nuevoAlumno = new Alumno(req.body);
    await nuevoAlumno.save();
    res.json(nuevoAlumno);
};

// Modificar (PATCH)
export const updateAlumno = async (req: Request, res: Response) => {
    const alumnoActualizado = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(alumnoActualizado);
};

// Eliminar (DELETE)
export const deleteAlumno = async (req: Request, res: Response) => {
    await Alumno.findByIdAndDelete(req.params.id);
    res.json({ message: 'Alumno eliminado' });
};
