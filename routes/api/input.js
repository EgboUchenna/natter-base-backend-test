import { Router } from 'express';
const router = Router();

import removeInput from '../../controllers/input';

router.delete('/:item', removeInput);

export default router;
