//index.js
const db = require("db");
console.log('Começou!');

console.log('INSERT INTO estoque');
const result = db.inserirProduto({ produto_estoque: "Arroz", preco_estoque: "5", quant_estoque: 10 });
console.log(result);

console.log('SELECT * FROM estoque');
const clientes = db.mostrarEstoque();
console.log(clientes);

console.log('UPDATE estoque');
const result2 = db.atualizarProduto(0, { produto_estoque: "Feijão", preco_estoque: "5", quant_estoque: 10 });
console.log(result2);

console.log('DELETE FROM estoque');
const result3 = db.deletarProduto(1);
console.log(result3);


