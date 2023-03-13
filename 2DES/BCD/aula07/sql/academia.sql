DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia;
USE academia;

CREATE TABLE alunos (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    nascimento date NOT NULL,
    sexo varchar(1) NOT NULL,
    peso decimal(10,2) NOT NULL
);

CREATE TABLE telefones (
    id int NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY(id) REFERENCES alunos(id)
);

CREATE TABLE exercicios (
    id_exercicio INT not null PRIMARY KEY,
    descricao varchar(30) not null,
    grupo_muscular varchar(20),
    aparelho varchar(30) not null
);

CREATE TABLE fichas (
    id_aluno INT NOT NULL,
    id_exercicio INT NOT NULL,
    dia_semana varchar(20) NOT NULL,
    series varchar(40),
    FOREIGN KEY (id_aluno) REFERENCES alunos(id),
    FOREIGN KEY (id_exercicio) REFERENCES exercicios(id_exercicio)
);

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/academia/alunos.CSV'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM alunos;

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/academia/telefones.CSV'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/academia/exercicios.CSV'
INTO TABLE exercicios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/academia/fichas.CSV'
INTO TABLE fichas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;