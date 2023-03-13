CREATE DATABASE alunos;
USE alunos;
CREATE TABLE registro (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE certificados(
    aluno INT NOT NULL,
    curso VARCHAR(30) NOT NULL,
    inicio_curso DATE NOT NULL,
    fim_curso DATE NOT NULL,
    professor VARCHAR(25),
    PRIMARY KEY(aluno),
    FOREIGN KEY(aluno) REFERENCES registro(id)
);

INSERT INTO registro(nome, sobrenome, idade, email) VALUES (
    "Vinicius",
    "Souza",
    17,
    "vinisouza01@gmail.com"
);

INSERT INTO certificados(aluno, curso, inicio_curso, fim_curso, professor) VALUES (
    "1", "Operador de microcomputador", 2021-08-10, 2021-12-05, "Trevelin"
);

