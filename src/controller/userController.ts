import { Request, Response } from 'express';
import User from '../models/User';

// Consulta general (GET)
export const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.find();
    res.json(users);
};

// Consulta individual (GET)
export const getUserById = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

// Crear (POST)
export const createUser = async (req: Request, res: Response) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
};

// Modificar (PATCH)
export const updateUser = async (req: Request, res: Response) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
};

// Eliminar (DELETE)
export const deleteUser = async (req: Request, res: Response) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado' });
};

