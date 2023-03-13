-- criar tabela de ordens de serviço
CREATE DATABASE ordens_servico;
USE ordens_servico;


CREATE TABLE os(
    id INT NOT NULL AUTO_INCREMENT,
    func_abertura INT NOT NULL,
    func_executor INT NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE NOT NULL,
    hora_fim TIME NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(func_abertura)REFERENCES funcionarios(matricula), 
    FOREIGN KEY(func_executor)REFERENCES funcionarios(matricula) 
);


CREATE TABLE funcionarios(
    matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    PRIMARY KEY(matricula)
);

ALTER TABLE os DROP funcionario;
ALTER TABLE os ADD func_abertura VARCHAR(50) NOT NULL