import { Router } from 'express'
import * as controller from '../controller/contatoController.js'

const routerContatos = Router();

routerContatos.get('/contatos', controller.listar);
routerContatos.get('/contatos/:id', controller.buscarPorID);
routerContatos.post('/criarContatos', controller.criarContato);

export default routerContatos