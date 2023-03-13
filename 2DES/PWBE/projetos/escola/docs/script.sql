-- creation of tables
DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola;
USE escola;


CREATE TABLE turma (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    abreviacao VARCHAR(15)
);

CREATE TABLE professor (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especialidade VARCHAR(30)
);

CREATE TABLE aluno (
    ra VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE NOT NULL,
    id_turma INTEGER NOT NULL,
    FOREIGN KEY (id_turma) REFERENCES turma(id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE leciona (
    id_prof INT NOT NULL,
    id_turma INT NOT NULL,
    FOREIGN KEY(id_prof) REFERENCES professor(id),
    FOREIGN KEY(id_turma) REFERENCES turma(id)
);



-- add informations on the table
INSERT INTO professor VALUES
(default, "Reenye", "Mobile"),
(default, "Wellington", "Banco de dados"),
(default, "Ivo", "Matematica");

INSERT INTO turma VALUES 
(1, "Desenvolvimento de sistemas", "2DES"),
(2, "Desenvolvimento de sistemas", "1DES"),
(3, "Desenvolvimento de sistemas", "3DES"),
(4, "Eletronica", "2EA"),
(5, "Eletronica", "3EA");

INSERT INTO aluno VALUES
('RA01', 'Vinicius', '2005-07-13', 1),
('RA02', 'Felipe', '2012-07-04', 2),
('RA03', 'Gilson', '2003-04-10', 3);

INSERT INTO leciona VALUES
(1, 1),
(1,2),
(2,1),
(2,2),
(3,4),
(3,5);

SELECT * FROM professor;  

SELECT * FROM turma;