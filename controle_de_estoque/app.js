//REQUERIR OS MÓDULOS DO NODE.JS
var express = require("express");
const app = express();
const portaServidor = 3000;

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "user",
  database: "bd_estoque"
});

con.connect(function (err) {
  var resultado = 0;
  if (err) throw err;
  console.log("Conectado!");
});

//CONFIGURAR A VISUALIZAÇÃO
app.set("view engine", "ejs"); //chamando o motor de visualização
app.set("views", __dirname, "/views"); //definindo qual diretório está o motor de visualização
app.use(express.urlencoded({extended:true})); //permite que os dados passem de uma página pra outra;
app.use(express.json()); //transportado através do formato json;
app.use(express.static("public"));


//CRIAÇÃO DA ROTA PADRÃO
const estoqueRouter = require("./routers/estoque-router");
app.use("/estoque", estoqueRouter);

//CRIAR ROTA PARA RENDERIZAR A PÁGINA PRINCIPAL
app.get("/", (req, res)=>{
    res.render("views/pages/paginaInicial")
});



// CHECAR EM QUE PORTA A APLICAÇÃO IRÁ RODAR;
app.listen(portaServidor, ()=>{
    console.log("Servidor rodando na porta " ,portaServidor)
});
