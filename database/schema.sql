-- Criando tabela Contatos
CREATE TABLE Contatos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	telefone VARCHAR(20),
	email VARCHAR(80) NOT NULL UNIQUE,
	senha_hash VARCHAR(255) NOT NULL UNIQUE
);

-- Populando com 30 registros
INSERT INTO Contatos (nome, telefone, email) VALUES
('Ana Silva', '(11) 98765-4321', 'ana.silva@email.com'),
('Bruno Oliveira', '(21) 97654-3210', 'bruno.o@email.com'),
('Carla Souza', '(31) 96543-2109', 'carla.souza@provedor.com'),
('Diego Santos', '(41) 95432-1098', 'diego.santos@email.com'),
('Elena Martins', '(51) 94321-0987', 'elena.m@empresa.com.br'),
('Fabio Costa', '(61) 93210-9876', 'fabio.costa@email.com'),
('Giovana Lima', '(71) 92109-8765', 'gi.lima@provedor.com'),
('Henrique Rocha', '(81) 91098-7654', 'h.rocha@email.com'),
('Isabela Alves', '(91) 90987-6543', 'isabela.alves@email.com'),
('João Pereira', '(11) 91234-5678', 'joao.p@empresa.com'),
('Karina Gomes', '(21) 92345-6789', 'karina.g@email.com'),
('Lucas Mendes', '(31) 93456-7890', 'lucas.mendes@provedor.com'),
('Marina Freitas', '(41) 94567-8901', 'marina.f@email.com'),
('Natan Ribeiro', '(51) 95678-9012', 'natan.r@empresa.com.br'),
('Olivia Cardoso', '(61) 96789-0123', 'olivia.c@email.com'),
('Paulo Nunes', '(71) 97890-1234', 'paulo.nunes@provedor.com'),
('Quiteria Lins', '(81) 98901-2345', 'quiteria@email.com'),
('Rafael Viana', '(91) 99012-3456', 'rafael.v@email.com'),
('Sara Meireles', '(11) 98123-4567', 'sara.m@empresa.com'),
('Tiago Barbosa', '(21) 97234-5678', 'tiago.b@email.com'),
('Ursula Ramos', '(31) 96345-6789', 'ursula.ramos@provedor.com'),
('Vitor Hugo', '(41) 95456-7890', 'vhugo@email.com'),
('Wagner Dias', '(51) 94567-8901', 'wagner.d@empresa.com.br'),
('Xavier Filho', '(61) 93678-9012', 'xavier@email.com'),
('Yara Luz', '(71) 92789-0123', 'yara.luz@provedor.com'),
('Zeca Pagode', '(81) 91890-1234', 'zeca@email.com'),
('Alice Ferreira', '(91) 90901-2345', 'alice.f@email.com'),
('Bernardo Silva', '(11) 99112-2334', 'bernardo.s@empresa.com'),
('Camila Rocha', '(21) 98223-3445', 'camila.r@email.com'),
('Daniela Castro', '(31) 97334-4556', 'daniela.c@provedor.com');