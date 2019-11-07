import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/users', UserController.findAll);
routes.get('/users/:username', UserController.find);
routes.post('/users/:username', UserController.store);
routes.delete('/users/:username', UserController.delete);

export default routes;
