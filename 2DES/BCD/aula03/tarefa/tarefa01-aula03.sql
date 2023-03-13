-- activity 1 - class 03
DROP DATABASE IF EXISTS ordens_servico_1;
CREATE DATABASE ordens_servico_1;
USE ordens_servico_1;
CREATE TABLE os (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    func_abre VARCHAR(30) NOT NULL,
    func_executa VARCHAR(30),
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim TIME
);

-- on the insert below, it's necessary you define what you want to insert,
-- 'cause the id is a primary key

INSERT INTO os (func_abre, func_executa, descricao, data_abertura, hora_abertura, data_fim, hora_fim) VALUES
("Reenye", "Levi", "Torneira da pia da cozinha pingando", "2023-02-01", "11:00:00", "2023-02-01", "12:00:00" );

INSERT INTO os (func_abre, func_executa, descricao, data_abertura, hora_abertura, data_fim, hora_fim) VALUES
("Paraguassu", "Levi", "Torneira da pia do banheiro pingando", "2023-02-01", "13:00:00", "2023-02-02", "13:00:00" );

INSERT INTO os (func_abre, func_executa, descricao, data_abertura, hora_abertura, data_fim, hora_fim) VALUES
("Tati", "Levi", "Limpar caixa d'água", "2023-02-02", "10:00:00", "2023-02-02", "13:00:00" );

INSERT INTO os (func_abre, func_executa, descricao, data_abertura, hora_abertura, data_fim, hora_fim) VALUES
("Ivo", "Levi", "Trocar tomada da secretaria para padrão novo", "2023-02-02", "12:00:00", "2023-02-02", "16:00:00" );

INSERT INTO os (func_abre, func_executa, descricao, data_abertura, hora_abertura) VALUES
("Reenye", "Levi", "Trocar tomada da sala dos professores para padrão novo", "2023-02-02", "16:00:00");     

INSERT INTO os (func_abre, func_executa, descricao, data_abertura, hora_abertura) VALUES
("Wellington", "Levi", "Instalar duas tomadas na oficina mecânica", "2023-02-03", "08:00:00");

INSERT INTO os (func_abre, func_executa, descricao, data_abertura, hora_abertura) VALUES
("Paraguassu", "Levi", "Instalar duas tomadas no laboratório 5", "2023-02-03", "09:00:00");