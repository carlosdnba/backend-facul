import { Router } from 'express';
import controller from './controller/Controller';

const routes = Router();

routes.get('/', controller.default);

export default routes;