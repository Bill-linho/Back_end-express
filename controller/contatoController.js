import * as module from '../model/contatosModel.js';

export async function listar(req, res){
    const todaLista = await module.listarContatos();
    console.log(todaLista)
    res.status(200).json(todaLista);
}

export async function buscarPorID (req, res){
    const resultadoContato = await module.buscarContatoID(id);
    // Tratamento do resultado
    if (!resultadoContato){
        res.satus(404).json({ erro: "Usuairo não existe!"})
    }else{
        res.status(200).json(resultadoContato)
    }
}

export function criarContato(req, res){
    //id, nome, telefone e email.
    const {nome, telefone, email} = req.body;

    if (!nome || !telefone || !email){
        res.status(422).json({ mensagem: "Dados incompletos!"})
    }else{
        const novoContato = module.cadastrarContato(nome,telefone,email);
        res.status(201).json(novoContato);
    }
}