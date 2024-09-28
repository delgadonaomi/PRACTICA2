import { Request, Response } from 'express';
import Nota from '../models/Nota';

// Consulta general (GET)
export const getAllNotas = async (req: Request, res: Response) => {
    const notas = await Nota.find().populate('alumnoId asignaturaId');
    res.json(notas);
};

// Consulta individual (GET)
export const getNotaById = async (req: Request, res: Response) => {
    const nota = await Nota.findById(req.params.id).populate('alumnoId asignaturaId');
    res.json(nota);
};

// Crear (POST)
export const createNota = async (req: Request, res: Response) => {
    const nuevaNota = new Nota(req.body);
    await nuevaNota.save();
    res.json(nuevaNota);
};

// Modificar (PATCH)
export const updateNota = async (req: Request, res: Response) => {
    const notaActualizada = await Nota.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(notaActualizada);
};

// Eliminar (DELETE)
export const deleteNota = async (req: Request, res: Response) => {
    await Nota.findByIdAndDelete(req.params.id);
    res.json({ message: 'Nota eliminada' });
};
