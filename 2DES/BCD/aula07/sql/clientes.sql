DROP DATABASE IF EXISTS atividade01;
CREATE DATABASE IF NOT EXISTS atividade01;
USE atividade01;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    nascimento date not null,
    sexo varchar(1) NOT NULL,
    peso DECIMAL(10,2) NOT NULL
);

CREATE TABLE telefones (
    id_cliente INT not null,
    telefones varchar(50) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO clientes(nome, nascimento, sexo, peso) VALUES
('Ana de Souza de Oliveira', '2000/05/22', 'M', 65),
('Ana Oliveira Oliveira', '1990/08/16', 'T', 88),
('Lúcia da Silva de Souza', '1988/06/14', 'F', 45.5),
('Marcos de Souza Castro', '2002/07/13', 'M', 98),
('Maria Oliveira Castro', '2005/08/14', 'T', 101),
('Jurema de Souza Castro', '2007/06/15', 'F', 80);

INSERT INTO telefones VALUES
(1,'(11)04023-4384'),
(1,'(14)3288-8530'),
(2,'(21)74746-1126'),
(2,'(14)64505-3435'),
(2,'(19)03086-1102'),
(3,'(14)64500-3435'),
(4,'(19)28260-0126'),
(5,'(21)34757-1544'),
(6,'(19)3030-4465'),
(6,'(19)93030-4460');

-- show information about clientes and their phones but repeatedly
SELECT * FROM clientes JOIN telefones;

-- show clientes with their respectives phones

SELECT * FROM clientes JOIN telefones ON clientes.id_cliente = telefones.id_cliente;