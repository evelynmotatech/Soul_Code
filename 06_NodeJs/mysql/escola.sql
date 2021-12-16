USE escola_ivy;
DROP TABLE notas;
DROP TABLE alunos;
DROP TABLE turmas;
DROP TABLE locais;
DROP TABLE funcionarios;
CREATE TABLE IF NOT EXISTS funcionarios(
  cpf_func VARCHAR(10) NOT NULL,
  nome_func VARCHAR(50) NOT NULL,
  cargo_func VARCHAR(20) NOT NULL,
  PRIMARY KEY(cpf_func)
);
CREATE TABLE IF NOT EXISTS locais(
  id_local INT NOT NULL AUTO_INCREMENT,
  responsavel_local VARCHAR(14) NOT NULL,
  descricao_local VARCHAR(50) NOT NULL,
  PRIMARY KEY(id_local),
  FOREIGN KEY(responsavel_local) REFERENCES funcionarios(cpf_func)
);
CREATE TABLE IF NOT EXISTS turmas(
  id_turma INT NOT NULL AUTO_INCREMENT,
  professor_turma VARCHAR(14) NOT NULL,
  local_turma INT NOT NULL,
  PRIMARY KEY(id_turma),
  FOREIGN KEY(professor_turma) REFERENCES funcionarios(cpf_func),
  FOREIGN KEY(local_turma) REFERENCES locais(id_local)
);

CREATE TABLE IF NOT EXISTS alunos(
matricula_aluno VARCHAR(10) NOT NULL,
nome_aluno VARCHAR(50) NOT NULL,
turma_aluno INT NOT NULL,
PRIMARY KEY(matricula_aluno),
FOREIGN KEY(turma_aluno) REFERENCES turmas(id_turma)
);
CREATE TABLE IF NOT EXISTS notas(
  id_notas INT NOT NULL AUTO_INCREMENT,
  professor_nota VARCHAR(14) NOT NULL,
  aluno_nota VARCHAR(10) NOT NULL,
  turma_nota INT NOT NULL,
  materia VARCHAR(20) NOT NULL,
  nota FLOAT NOT NULL,
  PRIMARY KEY(id_notas),
  FOREIGN KEY(professor_nota) REFERENCES funcionarios(cpf_func),
  FOREIGN KEY(aluno_nota) REFERENCES alunos(matricula_aluno),
  FOREIGN KEY(turma_nota) REFERENCES turmas(id_turma)
);