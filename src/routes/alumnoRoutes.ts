import { Router } from 'express';
import {
    getAllAlumnos,
    getAlumnoById,
    createAlumno,
    updateAlumno,
    deleteAlumno,
} from '../controller/alumnoController';

const router = Router();

router.get('/', getAllAlumnos);
router.get('/:id', getAlumnoById);
router.post('/', createAlumno);
router.patch('/:id', updateAlumno);
router.delete('/:id', deleteAlumno);

export default router;
