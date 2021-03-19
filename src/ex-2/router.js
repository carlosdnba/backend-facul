import { Router } from 'express';
import { getProduct, getProducts } from './controllers';

const router = Router();

router.get('/products', getProducts);

router.post('/product/nome', getProduct.nome);
router.post('/product/marca', getProduct.marca);
router.post('/product/tipo', getProduct.tipo);

export default router;
