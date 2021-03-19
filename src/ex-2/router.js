import { Router } from 'express';
import { getProducts } from './controllers';

const router = Router();

router.get('/products', getProducts);

export default router;
