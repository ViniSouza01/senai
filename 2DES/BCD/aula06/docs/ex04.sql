DROP DATABASE IF EXISTS atividade04;
CREATE DATABASE atividade04;
USE atividade04;

CREATE TABLE clientes (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    bairro VARCHAR(30) NOT NULL,
    cidade VARCHAR(30) NOT NULL,
    uf VARCHAR(2) NOT NULL
);

CREATE TABLE telefones (
    id INT NOT NULL,
    tipo VARCHAR(15) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (id) REFERENCES clientes(id)
);

CREATE TABLE parcelas (
    id INT NOT NULL,
    parcelas INT NOT NULL,
    data_compra DATE NOT NULL,
    vencimento DATE,
    pagamento DATE,
    valor DECIMAL(10,2) NOT NULL,
    diferenca DECIMAL(10,2),
    FOREIGN KEY(id) REFERENCES  clientes(id)
);