import { Request, Response } from 'express';
import Asignatura from '../models/Asignatura';

// Consulta general (GET)
export const getAllAsignaturas = async (req: Request, res: Response) => {
    const asignaturas = await Asignatura.find();
    res.json(asignaturas);
};

// Consulta individual (GET)
export const getAsignaturaById = async (req: Request, res: Response) => {
    const asignatura = await Asignatura.findById(req.params.id);
    res.json(asignatura);
};

// Crear (POST)
export const createAsignatura = async (req: Request, res: Response) => {
    const nuevaAsignatura = new Asignatura(req.body);
    await nuevaAsignatura.save();
    res.json(nuevaAsignatura);
};

// Modificar (PATCH)
export const updateAsignatura = async (req: Request, res: Response) => {
    const asignaturaActualizada = await Asignatura.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(asignaturaActualizada);
};

// Eliminar (DELETE)
export const deleteAsignatura = async (req: Request, res: Response) => {
    await Asignatura.findByIdAndDelete(req.params.id);
    res.json({ message: 'Asignatura eliminada' });
};
