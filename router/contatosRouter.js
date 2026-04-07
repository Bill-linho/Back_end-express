import { Router } from 'express'
import * as controller from '../controller/contatoController.js'
import { autencticar } from '../Middleware/auth.middleware.js';

const routerContatos = Router();

routerContatos.get('/', controller.listar);
routerContatos.get('/:id', controller.buscarPorID);

routerContatos.post('/perfil', autencticar, controller.perfilauthentical)

routerContatos.post('/criar', controller.criarContato);
routerContatos.post('/login', controller.login);


export default routerContatos