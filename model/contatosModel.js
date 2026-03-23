// Simular um banco de dados
let contatos = [
  { id: 1, nome: "Fulano", telefone: "04899999-8888", email: "fulano.silva@gmail.com" },
  { id: 2, nome: "Ciclano Souza", telefone: "04898888-7777", email: "ciclano.s@uol.com.br" },
  { id: 3, nome: "Beltrano Oliveira", telefone: "01197777-6666", email: "beltrano.oli@hotmail.com" },
  { id: 4, nome: "Ana Costa", telefone: "02196666-5555", email: "ana.costa@outlook.com" },
  { id: 5, nome: "Bruno Ramos", telefone: "03195555-4444", email: "bruno.ramos@gmail.com" },
  { id: 6, nome: "Carla Dias", telefone: "05194444-3333", email: "carla.dias@yahoo.com" },
  { id: 7, nome: "Diego Lima", telefone: "06193333-2222", email: "diego.lima@gmail.com" },
  { id: 8, nome: "Elena Martins", telefone: "07192222-1111", email: "elena.m@empresa.com" },
  { id: 9, nome: "Fabio Santos", telefone: "08191111-0000", email: "fabio.santos@gmail.com" },
  { id: 10, nome: "Gisele Rocha", telefone: "08590000-9999", email: "gisele.rocha@uol.com" },
  { id: 11, nome: "Hugo Mendes", telefone: "09198888-1234", email: "hugo.mendes@gmail.com" }
];

export function listarContatos(){
    return contatos;
}

export function buscarContatoID(id){
    const resultBusca = contatos.find(cont => cont.id == id);
    return resultBusca;
}

export function cadastrarContato(nome, telefone, email){
    const novoContato = {
        id: contatos.length + 1,
        nome: nome,
        telefone: telefone,
        email: email
    }
    contatos.push(novoContato);
    return novoContato;
}