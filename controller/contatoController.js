import * as module from '../model/contatosModel.js';
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

export async function listar(req, res) {
    const todaLista = await module.listarContatos();
    console.log(todaLista)
    res.status(200).json(todaLista);
}

export async function buscarPorID(req, res) {
    const resultadoContato = await module.buscarContatoID(id);
    // Tratamento do resultado
    if (!resultadoContato) {
        res.satus(404).json({ erro: "Usuairo não existe!" })
    } else {
        res.status(200).json(resultadoContato)
    }
}

export async function criarContato(req, res) {
    //id, nome, telefone e email.
    const { nome, telefone, email, senha } = req.body;

    if (!nome || !telefone || !email || !senha) {
        res.status(422).json({ mensagem: "Dados incompletos!" })
    } else {
        const senha_hash = await bcrypt.hash(senha,10)

        const novoContato = await module.cadastrarContato(nome, telefone, email, senha_hash);
        res.status(201).json(novoContato);

    }
}

export async function login(req, res) {
    const { email, senha } = req.body; 

    if(!email || !senha){
        res.status(422).json({ mensagem:'Dados imcompletos'})
    } 
     
    const cadastrar = await module.loginModulo(email, senha)
    if(cadastrar == false ){
        return res.status(401).json({error:'Faz o L'})

    }else if( cadastrar == true){
        
        const token = JWT.sign(
            {email: email},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )

        return res.status(200).json(token)
    }else{
        return res.status(404).json({ erro: "Erro" })
    }

}