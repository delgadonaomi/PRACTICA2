import { Router } from 'express';
import {
    getAllNotas,
    getNotaById,
    createNota,
    updateNota,
    deleteNota,
} from '../controller/notaController';

const router = Router();

router.get('/', getAllNotas);
router.get('/:id', getNotaById);
router.post('/', createNota);
router.patch('/:id', updateNota);
router.delete('/:id', deleteNota);

export default router;
