import { Router } from 'express';
import {
    getAllAsignaturas,
    getAsignaturaById,
    createAsignatura,
    updateAsignatura,
    deleteAsignatura,
} from '../controller/asignaturaController';

const router = Router();

router.get('/', getAllAsignaturas);
router.get('/:id', getAsignaturaById);
router.post('/', createAsignatura);
router.patch('/:id', updateAsignatura);
router.delete('/:id', deleteAsignatura);

export default router;

