DROP DATABASE IF EXISTS cadastros;
CREATE DATABASE cadastros;
USE cadastros;

CREATE TABLE clientes (
    cpf VARCHAR(15) NOT NULL PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    numero VARCHAR(10),
    complemento VARCHAR(50)
);


CREATE TABLE telefones (
    cpf VARCHAR(15) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY(cpf) REFERENCES clientes(cpf) 
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE compras (
    numero_compra INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    valor FLOAT(6,2) NOT NULL,
    vencimento DATE NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    pagamento DATE,
    FOREIGN KEY(cpf) REFERENCES clientes(cpf)
);
-- FOREIGN KEY(chave_secundaria) REFERENCES tbl_name(chave_primaria);
INSERT INTO clientes (cpf, nome, cep) VALUES
("777.222.333-08", "Jão", "13920-000"),
("222.555.777-10", "Predão", "13870-000"),
("444.788.097-10", "Felipatos", "34671-000");


INSERT INTO telefones VALUES
(null, '19 123455-6789');