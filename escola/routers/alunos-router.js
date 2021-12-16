var express = require("express");
const router = express.Router();

//
const alunoController = require("../controllers/alunos-controller");

//Rota para página de aluno
router.get("/", alunoController.listar_alunos);

//Rota para cadastrar aluno
router.get("/cadastrarAluno", alunoController.cadastrar_aluno_get);

router.post("/cadastrarAluno", alunoController.cadastrar_aluno_post);

//Rota para deletar aluno
router.get("/deletarAluno/:id", alunoController.deletar_aluno);


//Rota para editar aluno
router.get("/editarAluno/:id", alunoController.editar_aluno_get);

router.post("/editarAluno", alunoController.editar_aluno_post);

//Exportar como module
module.exports = router;