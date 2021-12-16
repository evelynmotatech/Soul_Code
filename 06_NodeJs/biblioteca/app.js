var express = require("express");
const app = express();
var mongoose = require("mongoose");
var portaServidor = 3000;

// CONECTAR AO BANCO DE DADOS
mongoose.connect("mongodb+srv://evelyn_mota:evelyn_mota@cluster0.bor2v.mongodb.net/biblioteca?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// CRIAR O MODELO NO BANCO DE DADOS
const Livros = mongoose.model("livros", {
    titulo: String,
    nomeAutor: String,
    anoPublicacao: Number,
    editora: String,
    genero: String
});

//CONFIGURAR A VISUALIZAÇÃO
app.set("view engine", "ejs"); //chamando o motor de visualização
app.set("views", __dirname, "/views"); //definindo qual diretório está o motor de visualização
app.use(express.urlencoded()); //permite que os dados passem de uma página pra outra;
app.use(express.json()); //transportado através do formato json;
app.use(express.static("public"));

//CRIAR ROTA PARA RENDERIZAR A PÁGINA PRINCIPAL
app.get("/", (req, res)=>{
    res.render("paginaInicial")
});

//ROTA PARA RENDERIZAR A PÁGINA DE CADASTRO DE LIVROS
app.get("/cadastrarLivros", (req, res)=>{
    res.render("cadastrarLivros");
});

//ROTA PARA RENDERIZAR A PÁGINA DE PESQUISA DE LIVROS
app.get("/pesquisarLivros", (req, res)=>{
    res.render("pesquisarLivros");
});

app.get("/editarAlunos/:id", (req,res) => {
    Alunos.findById(req.params.id, (err, aluno) =>{
        if(err)
            return res.status(500).send("Erro ao consultar Aluno");
        res.render("editarAlunos",{aluno_id:aluno})
    })
})

//ROTA PARA RENDERIZAR A PÁGINA DE LIVROS
app.get("/livros", (req, res)=>{
   var consulta = Livros.find({}, (err, livros)=>{
       if(err){
           return res.status("500").send("Erro ao consultar livro")
       }
       res.render("livros", {
        livro_item: livros
       });
   });
});

//MÉTODO POST PARA SALVAR OS ITENS CADASTRADOS NO BANCO DE DADOS;
app.post("/cadastrarLivros", (req, res) => {
    let livro = new Livros(); //criando um objeto do tipo Livros;
    livro.titulo = req.body.titulo; //recebe o valor do formulário
    livro.nomeAutor = req.body.nomeAutor;
    livro.anoPublicacao = req.body.anoPublicacao;
    livro.editora = req.body.editora;
    livro.genero = req.body.genero;

    livro.save((err) => {
        if (err) {
            return res.status(500).send("Erro ao cadastrar livro.");
        }
        return res.redirect("/livros");
    });
});

// METODO PARA EXCLUIR OS DADOS CADASTRADOS
app.get("/deletarLivro/:id", (req, res)=>{
    var idLivro = req.params.id;
    Livros.deleteOne({_id:idLivro}, (err, result)=>{
        if(err){
            return res.status(500).send("Erro ao deletar livro");
        }        
    })
    res.redirect("/livros");
});


// ROTA DO BOTÃO EDITAR
app.get("/atualizarLivros/:id", (req,res) => {
    Livros.findById(req.params.id, (err, livro) =>{
        if(err)
            return res.status(500).send("Erro ao consultar livro");
        res.render("atualizarLivros",{livro_item:livro})
    })
})

// MÉTODO POST PARA ATUALIZAR OS DADOS NO BANCO DE DADOS
app.post("/atualizarLivros", (req,res) =>{
    var id = req.body.id;
    Livros.findById(id, (err, livro) =>{
        if(err)
        return res.status(500).send("Erro ao consultar livro"); 
    livro.titulo = req.body.titulo; //recebe o valor do formulário
    livro.nomeAutor = req.body.nomeAutor;
    livro.anoPublicacao = req.body.anoPublicacao;
    livro.editora = req.body.editora;
    livro.genero = req.body.genero;
    livro.save(erro =>{
        if(err)
            return res.status(500).send("Erro ao editar livro"); 
        return res.redirect("/livros");
    })
    });
})

// PESQUISAR NO BANCO DE DADOS
//pegar o valor do input - variavel pra armazenar
//comparar o valor do input com o Model;



// CHECAR EM QUE PORTA A APLICAÇÃO IRÁ RODAR;
app.listen(3000, ()=>{
    console.log("Rodando na porta " + portaServidor)
});