DROP DATABASE IF EXISTS atividade01;
CREATE DATABASE IF NOT EXISTS atividade01;
USE atividade01;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTOINCREMENT,
    nome varchar(50) NOT NULL,
    nascimento date not null,
    sexo varchar(1) NOT NULL,
    peso DECIMAL(10,2) NOT NULL
);

CREATE TABLE telefones (
    id_cliente INT PRIMARY KEY,
    telefones varchar(50) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);