//REQUERIR OS MÓDULOS DO NODE.JS
var express = require("express");
const app = express();
const portaServidor = 3000;
var mongoose = require("mongoose");

//CONFIGURAR A VISUALIZAÇÃO
app.set("view engine", "ejs"); //chamando o motor de visualização
app.set("views", __dirname, "/views"); //definindo qual diretório está o motor de visualização
app.use(express.urlencoded({extended:true})); //permite que os dados passem de uma página pra outra;
app.use(express.json()); //transportado através do formato json;
app.use(express.static("public"));

// CONECTAR AO BANCO DE DADOS
mongoose.connect("mongodb+srv://evelyn_mota:evelyn_mota@cluster0.bor2v.mongodb.net/escola?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const alunosRouter = require("./routers/alunos-router");
app.use("/alunos", alunosRouter);

//CRIAR ROTA PARA RENDERIZAR A PÁGINA PRINCIPAL
app.get("/", (req, res)=>{
    res.render("views/pages/paginaInicial")
});

// CHECAR EM QUE PORTA A APLICAÇÃO IRÁ RODAR;
app.listen(portaServidor, ()=>{
    console.log("Servidor rodando na porta " ,portaServidor)
});

