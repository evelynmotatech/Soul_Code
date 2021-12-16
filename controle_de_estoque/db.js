//CONECTAR AO BANDO DE DADOS;
function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require("mysql2/promise");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "user",
        database: "bd_estoque"
    });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

//APRESENTAR A TABELA DE PRODUTOS DO ESTOQUE
function mostrarEstoque(){
    const conn = connect();
    const [rows] = conn.query('SELECT * FROM estoque;');
    return rows;
}

function inserirProduto(){
    const conn = connect();
    let cod_estoque = req.body.cod_estoque;
    let produto_estoque = req.body.produto_estoque;
    let preco_estoque = req.body.preco_estoque;
    let quant_estoque =req.body.quant_estoque;
    const sql = 'INSERT INTO estoque(produto_estoque, preco_estoque, quant_estoque) VALUES (?,?,?);';
    const values = ['${produto_estoque}', '${preco_estoque}', '${quant_estoque}'];
    return conn.query(sql, values);
}
const conn = connect();
    

function atualizarProduto(id){
    const conn = connect();
    let cod_estoque = req.body.cod_estoque;
    let produto_estoque = req.body.produto_estoque;
    let preco_estoque = req.body.preco_estoque;
    let quant_estoque =req.body.quant_estoque;
    const sql = 'UPDATE estoque SET produto_estoque=?, preco_estoque=?, quant_estoque=? WHERE id=?';
    const values = ['${produto_estoque}', '${preco_estoque}', '${quant_estoque}', id];
    return conn.query(sql, values);
}

function deletarProduto(id){
    const conn =  connect();
    const sql = 'DELETE FROM estoque where id=?;';
    return conn.query(sql, [id]);
}

module.exports = {mostrarEstoque, inserirProduto, atualizarProduto, deletarProduto}