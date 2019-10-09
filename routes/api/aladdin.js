import { Router } from 'express';

import aladdinTravel from '../../controllers/aladdin';

const router = Router();

router.get('/aladdin', aladdinTravel);

export default router;
