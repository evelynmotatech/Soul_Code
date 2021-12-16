USE sistema_rh;

DROP TABLE salario;
DROP TABLE funcionarios;
DROP TABLE departamento;

CREATE TABLE IF NOT EXISTS departamento(
    id_departamento INT NOT NULL AUTO_INCREMENT,
    desc_departamento VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_departamento)
)

CREATE TABLE IF NOT EXISTS funcionarios(
    id_func INT NOT NULL AUTO_INCREMENT,
    nome_func VARCHAR(50) NOT NULL,
    cpf_func VARCHAR(14) NOT NULL,
    cargo_func VARCHAR(20) NOT NULL,
    departamento_func INT NOT NULL,
    PRIMARY KEY(id_func)
    FOREIGN KEY(departamento_func) REFERENCES (id_departamento)
);

CREATE TABLE IF NOT EXISTS salario(
    id_salario INT NOT NULL AUTO_INCREMENT,
    func_salario INT NOT NULL,    
    valor_salario INT NOT NULL,
    PRIMARY KEY(id_salario),
    FOREIGN KEY(func_salario) REFERENCES funcionarios(id_func)
);

INSERT INTO departamento(desc_departamento) VALUES ("retencao");
INSERT INTO departamento(desc_departamento) VALUES ("cobranca");


INSERT INTO funcionarios(nome_func, cpf_func, cargo_func, departamento_func) VALUES('Sophia','121212121', "operador", 1);
INSERT INTO funcionarios(nome_func, cpf_func, cargo_func, departamento_func) VALUES('Estela', '121212121',"supervisor", 2);
INSERT INTO funcionarios(nome_func, cpf_func, cargo_func, departamento_func) VALUES('Thiago', '121212121',"operador", 2);
INSERT INTO funcionarios(nome_func, cpf_func, cargo_func, departamento_func) VALUES('Eduardo', '121212121',"supervisor", 1);


INSERT INTO salario(func_salario, valor_salario)VALUES (1, 3500);
INSERT INTO salario(func_salario, valor_salario) VALUES (2, 2600);
INSERT INTO salario(func_salario, valor_salario) VALUES (3, 1800);
INSERT INTO salario(func_salario, valor_salario) VALUES (4, 2500);


