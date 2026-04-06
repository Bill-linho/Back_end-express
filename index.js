import express from 'express';
import 'dotenv/config'
import * as controller from './controller/contatoController'

const app = express();
app.use(express.json());
//rotas privadas
app.get('/', controller.buscarPorID);
app.get('/:id', controller.buscarPorID);

//rotas publicas
app.post('/cadastrar', controller.criarContato);
app.post('/login', controller.login);

const PORT = process.env.SERVE_PORT;

app.listen(PORT, () => {
    console.log('Aplicação rodando em: http://localhost:3000');
});