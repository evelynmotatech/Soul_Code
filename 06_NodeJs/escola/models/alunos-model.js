var mongoose = require("mongoose");

//Criar a classe que será usado no banco de dados
const Alunos = mongoose.model("alunos", {
    nome: String,
    idade: String,
    serie: String,
    turma: String,
});

module.exports = Alunos;