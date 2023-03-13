DROP DATABASE IF EXISTS atividade03;
CREATE DATABASE IF NOT EXISTS atividade03;
USE atividade03;

CREATE TABLE motoristas (
    cpf varchar(15) not null primary key,
    nome varchar(50) not null
);

CREATE TABLE telefones (
    cpf VARCHAR(15) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES motoristas (cpf)
);

CREATE TABLE dirige (
    cpf VARCHAR(15) NOT NULL,
    id_linha varchar(10) NOT NULL PRIMARY KEY,
    FOREIGN KEY (cpf) REFERENCES motoristas (cpf)
);

CREATE TABLE linhas (
    id_linha varchar(10) NOT NULL,
    descricao VARCHAR(25) NOT NULL,
    FOREIGN KEY (id_linha) REFERENCES dirige (id_linha)
);

CREATE TABLE horarios (
    id_linha varchar(10) NOT NULL,
    horario time not null,
    FOREIGN KEY (id_linha) REFERENCES dirige (id_linha)
);