import { Router } from 'express';

import validate from '../../controllers/data.js';

const router = Router();

router.post('/validate', validate);

export default router;
