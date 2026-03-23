import express from 'express';
import * as controller from './controller/contatoController.js';
import Router from './router/contatosRouter.js';

const app = express();
app.use(express.json());
app.use('/contatos', Router);
// app.get('/contatos/:id', controller.buscarPorID);
// app.post('/contatos', controller.criarContato);

app.listen(3000, () => {
    console.log('Aplicação rodando em: http://localhost:3000');
});