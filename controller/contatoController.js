import * as module from '../model/contatosModel.js';

export function listar(req, res){
    const todaLista = module.listarContatos();
    res.status(200).json(todaLista);
}

export function buscarPorID (req, res){
    const { id } = req.params;
    const resultadoContato = module.buscarContatoID(id);
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