-- Atividade estoque
DROP DATABASE IF EXISTS estoque;
CREATE DATABASE estoque CHARSET=UTF8 COLLATE utf8_general_ci;
USE estoque;

-- criar tabelas
CREATE TABLE produtos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    descricao TEXT
);


CREATE TABLE funcionarios(
    matricula INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(70)
);

CREATE TABLE acoes(
    id_produto INT NOT NULL,
    matricula INT NOT NULL,
    data DATE NOT NULL,
    acao VARCHAR(10) NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES produtos(id) ON UPDATE CASCADE,
    FOREIGN KEY (matricula) REFERENCES funcionarios (matricula) ON DELETE CASCADE
);

-- inserir dados
INSERT INTO produtos (nome, descricao) VALUES
("Tomada", "Tomada de 10A"),
("Interruptor", "Interruptor simples"),
("Interruptor", "Interruptor composto");


INSERT INTO funcionarios VALUES
(default, "Denner"),
(default, "Adolfo"),
(NULL, "Rodigo");

INSERT INTO acoes VALUES
(1, 1, "2023-02-01", "Compra", 5),
(1, 3, "2023-02-02", "Utiliza", 1),
(1, 2, "2023-02-01", "Compra", 10),
(1, 3, "2023-02-02", "Utiliza", 2);

-- para colocar data => STR_TO_DATE("02/02/2023", "%d/%m/%y"),