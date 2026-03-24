import express from 'express';
import 'dotenv/config'
import Router from './router/contatosRouter.js';

const app = express();
app.use(express.json());
app.use('/contatos', Router);
// app.get('/contatos/:id', controller.buscarPorID);
// app.post('/contatos', controller.criarContato);
const PORT = process.env.SERVE_PORT;

app.listen(PORT, () => {
    console.log('Aplicação rodando em: http://localhost:3000');
});