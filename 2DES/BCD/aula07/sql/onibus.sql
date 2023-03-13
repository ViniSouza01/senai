DROP DATABASE IF EXISTS onibus;
CREATE DATABASE IF NOT EXISTS onibus;
USE onibus;

CREATE TABLE motorista(
    cpf VARCHAR(15) NOT NULL PRIMARY KEY,
    nome_motorista VARCHAR(50) NOT NULL
);

CREATE TABLE telefone(
    cpf VARCHAR(20) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES motorista(cpf)
);

CREATE TABLE dirige(
    cpf VARCHAR(20),
    id_linha VARCHAR(15) NOT NULL PRIMARY key
);

CREATE TABLE linha(
    id_linha VARCHAR(15) NOT NULL,
    descricao_linha VARCHAR(50),
    FOREIGN KEY(id_linha) REFERENCES dirige(id_linha)
);

CREATE TABLE horario(
    id_linha VARCHAR(15) NOT NULL,
    horarios TIME NOT NULL,
    FOREIGN KEY(id_linha) REFERENCES dirige(id_linha)
);

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/onibus/motoristas.CSV'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/onibus/telefones.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/onibus/dirige.CSV'
INTO TABLE dirige
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/onibus/linhas.CSV'
INTO TABLE linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/2DES/BCD/aula07/csv/onibus/horarios.CSV'
INTO TABLE horario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

INSERT INTO motorista VALUE ('111.111.111-11', "Ramiro Gonsalves");
INSERT INTO dirige value(default, 'Linha6');
INSERT INTO linha VALUE ('Linha6', 'Pedreira x Arcadas');

-- Consulta motoristas com seus respectivos telefones

SELECT * FROM motorista m
LEFT JOIN telefone t
ON m.cpf = t.cpf;

SELECT * FROM vw_telefones_motoristas;
-- sem o JOIN, ele mostra apenas os motoristas com número de telefone
-- com o JOIN, ele mostra todos os motoristas, até quem não tem telefone

-- Consulta de motoristas com suas linhas
SELECT m.nome_motorista, d.id_linha FROM motorista m
LEFT JOIN dirige d
ON m.cpf = d.cpf;

-- SELECT diz o que será mostrado   
-- FROM diz qual é a tabela e qual o nome (letra) será dado
-- ON é a condição
-- LEFT ou RIGHT join será se você deseja listar algum motorista sem uma linha ou o contrário, e o nome (letra) da tabela

-- Mostrar todos os mostoristas, com ou sem linhas
SELECT m.nome_motorista, d.id_linha FROM motorista m
LEFT JOIN dirige d
ON m.cpf = d.cpf;

-- mostrar as linhas sem motorista
SELECT m.nome_motorista, d.id_linha FROM dirige d
RIGHT JOIN motorista m
ON l.id_linha;
-- Mostrar todos os mostoristas, e todas as linhas, independentes um do outro