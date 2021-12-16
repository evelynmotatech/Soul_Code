const { render } = require("ejs");
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


//Importando o modelo criado e o fazendo ser renderizado
exports.listar_produto = (req, res) => {
    res.render("views/pages/estoque", { resultado: produto });
}


exports.cadastrar_produto_get = (req, res) => {
    res.render("views/pages/cadastrarProduto");
}

exports.cadastrar_produto_post = (req, res) => {
    let produto_estoque = req.body.produto_estoque;
    let preco_estoque = req.body.preco_estoque;
    let quant_estoque = req.body.quant_estoque;

    var sql = `INSERT INTO estoque(produto_estoque, preco_estoque, quant_estoque) VALUES('${produto_estoque}', '${preco_estoque}', '${quant_estoque}')`;
    
    con.query(sql, function(err, result){
        resultado = result;
        console.log(resultado);
        if(err) throw err;
        res.redirect("/estoque")
    });
}


exports.deletar_produto = (req, res) => {
    var id = req.params.id;
    var minha_query = "DELETE FROM estoque WHERE cod_estoque = '" + cod_estoque + "'";
    con.query(minha_query, function (err, result) {
        if (err) throw err;
        console.log("Excluido onde cod_estoque:" + cod_estoque);
        return res.redirect("/estoque");
    });
}

exports.editar_produto_get = (req, res) => {
    var id = req.params.id;
    const conn = connect();
    let produto_estoque = req.body.produto_estoque;
    let preco_estoque = req.body.preco_estoque;
    let quant_estoque = req.body.quant_estoque;

    var sql = `INSERT INTO estoque(produto_estoque, preco_estoque, quant_estoque) VALUES('${produto_estoque}', '${preco_estoque}', '${quant_estoque}')`;
    con.query(sql, function(err, result){
        resultado = result;
        console.log(resultado);
        if(err) throw err;
    res.render("views/pages/cadastrarProduto", { resultado: produto });
    });
};

exports.editar_produto_post = (req, res) => {
    var id = req.body.id;
    const conn = connect();
    let produto_estoque = req.body.produto_estoque;
    let preco_estoque = req.body.preco_estoque;
    let quant_estoque = req.body.quant_estoque;

    var sql = `INSERT INTO estoque(produto_estoque, preco_estoque, quant_estoque) VALUES(?,?,?)`;
    var values = ['${produto_estoque}', '${preco_estoque}', '${quant_estoque}'];
    con.query(sql, values);
    aluno.save(err => {
        if (err) {
            return res.status(500).send("Erro ao salvar atualização cadastral");
        }
        return res.redirect("/estoque");
    });
};
