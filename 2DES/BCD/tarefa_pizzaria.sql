DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria;
USE pizzaria;

CREATE TABLE cliente (
    cliente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(15),
    nome VARCHAR(30) NOT NULL,
    logradouro VARCHAR(30) NOT NULL,
    numero DECIMAL(5,0),
    complemento VARCHAR(30),
    bairro VARCHAR(30),
    referencia VARCHAR(30)
);

CREATE TABLE pedido (
    pedido_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    data DATETIME,
    valor DECIMAL(5,2),
    FOREIGN KEY(cliente_id) REFERENCES cliente(cliente_id)
);

CREATE TABLE item_pedido (
    pedido_id INT NOT NULL,
    pizza_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quantidade DECIMAL(2,0),
    valor DECIMAL(5,2),
    FOREIGN KEY(pedido_id) REFERENCES pedido(pedido_id)
);

CREATE TABLE pizza (
    pizza_id INT NOT NULL,
    nome VARCHAR(30),
    descricao VARCHAR(30),
    valor DECIMAL(4,2),
    FOREIGN KEY (pizza_id) REFERENCES item_pedido(pizza_id)
);