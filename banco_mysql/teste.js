var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "user",
  database: "sistema_rh"
});

con.connect(function (err) {
  var resultado = 0;
  if (err) throw err;
  console.log("Conectado!");
  var sql = "SELECT * FROM funcionarios";
  con.query(sql, function (err, result) {
      resultado = result;
      console.log(resultado);
    if (err) throw err;
    console.log("dado inserido: " + sql);
  });
});