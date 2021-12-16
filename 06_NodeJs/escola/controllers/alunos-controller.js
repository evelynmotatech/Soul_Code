const {render} = require("ejs");
const aluno_bd = require("../models/alunos-model");

//Importando o modelo criado e o fazendo ser renderizado
exports.listar_alunos = (req, res) => {
    aluno_bd.find({}, (err, aluno) => {
        if (err) {
            return res.status(500).send("Erro ao listar aluno");
        }
        res.render("views/pages/alunos", {resultado: aluno});
    });
}

exports.cadastrar_aluno_get = (req, res) => {
    res.render("views/pages/cadastrarAluno");
}

exports.cadastrar_aluno_post = (req, res) => {
    let aluno = new aluno_bd(); //criando um objeto do tipo Alunos;
    aluno.nome = req.body.nome; //recebe o valor do formulário
    aluno.idade = req.body.idade;
    aluno.serie = req.body.serie;
    aluno.turma = req.body.sala;

    aluno.save((err) => {
        if (err) {
            return res.status(500).send("Erro ao cadastrar aluno.");
        }
        return res.redirect("/alunos");
    });
}

exports.deletar_aluno = (req, res) => {
    var id = req.params.id;
    aluno_bd.deleteOne({
        _id: id
    }, (err) => {
        if (err) {
            return res.status(500).send("Erro ao deletar aluno");
        }
        return res.redirect("/alunos");
    })
}

exports.editar_aluno_get = (req, res) => {
    var id = req.params.id;
    aluno_bd.findById(id, (err, aluno) => {
        if (err) {
            return res.status(500).send("Erro ao editar aluno");
        }
        res.render("views/pages/editarAluno", {resultado: aluno});
    });
};

exports.editar_aluno_post = (req, res) => {
    var id = req.body.id;
    aluno_bd.findById(id, (err, aluno) => {
        if (err) {
            return res.status(500).send("Erro ao editar");
        }
        aluno.nome = req.body.nome; //recebe o valor do formulário
        aluno.idade = req.body.idade;
        aluno.serie = req.body.serie;
        aluno.turma = req.body.sala;
        aluno.save(err => {
            if (err) {
                return res.status(500).send("Erro ao salvar atualização cadastral");
            }
            return res.redirect("/alunos");
        });
    })
};
