-- activity 2 - class 03

DROP DATABASE IF EXISTS ordens_servico_2;
CREATE DATABASE ordens_servico_2;
USE ordens_servico_2;

CREATE TABLE funcionarios(
    matricula INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(40) NOT NULL
);

CREATE TABLE os (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    func_abertura VARCHAR(30) NOT NULL,
    func_executor VARCHAR(30) NOT NULL,
    descricao TEXT,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim TIME,
    FOREIGN KEY(id) REFERENCES funcionarios(matricula)
);

ALTER TABLE os ADD CONSTRAINT id FOREIGN KEY

INSERT INTO funcionarios (nome, cargo) VALUES
("Levi", "Manutenção"),
("Denner", "Manutenção"),
("Reenye", "Professor"),
("Wellington", "Professor"),
("Ivo", "Professor"),
("Paraguassu", "Coordenador"),
("Tati", "Qualidade");

INSERT INTO os VALUES
(6, 4, 1, "Instalar duas tomadas na oficina mecanica", "2023-02-03", "08:00:00", null, null),
(7, 6, 1, "Instalar duas tomadas no laboratorio 5", "2023-02-03", "09:00:00", null, null);
(1, 3, 1, "Torneira da pia da cozinha pingando", "2023-02-01", "11:00:00", "2023-02-01", "12:00:00"),
(2, 6, 1, "Torneira da pia do banheiro pingando", "2023-02-01", "13:00:00", "2023-02-02", "13:00:00"),
(3, 7, 1, "Limpar a caixa d'agua", "2023-02-02", "10:00:00", "2023-02-02", "13:00:00"),
(4, 5, 2, "Trocar a tomada da secretaria para padrao novo", "2023-02-02", "12:00:00", "2023-02-02", "16:00:00"),
(5, 3, 2, "Trocar a tomada da sala dos professores para padrao novo", "2023-02-02", "16:00:00", null, null);





