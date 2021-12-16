// var meuCarro = new Object();
// meuCarro.fabricacao = "Ford";
// meuCarro.modelo = "Mustang";
// meuCarro.ano = 1969;

// document.write(meuCarro.modelo);

// class livrosTerror{
//     constructor(titulo, autor, anoPublicacao){
//         this.titulo = titulo;
//         this.autor = autor;
//         this.anoPublicacao = anoPublicacao;
//     }
//     mostrarDados(){
//         var dados;
//         dados = "Título: " + this.titulo + ". Autor: " + this.autor + ". Ano de publicação: " + this.anoPublicacao + ".<br>";
//         return dados;
//     }
// }


// var livro1 = new livrosTerror("Nas Montanhas da Loucura", "H.P. Lovecraft", 1936);
// var livro2 = new livrosTerror("Drácula", "Bram Stoker", 1897);
// var livro3 = new livrosTerror("Frankstein", "Mary Shalley", 1817);
// var livro4 = new livrosTerror("O Gato Preto", "Edgar Allan Poe", 1843);
// var livro5 = new livrosTerror("The Hellbound Heart", "Clive Barker", 1986);
// var livro6 = new livrosTerror("It: a Coisa", "Stephen King", 1986);

// // console.log(livrosTerror);
// document.write(livro1.mostrarDados());
// document.write(livro2.mostrarDados());
// document.write(livro3.mostrarDados());
// document.write(livro4.mostrarDados());
// document.write(livro5.mostrarDados());
// document.write(livro6.mostrarDados());



// function mostrarProps(obj, nomeDoObj) {
//     var resultado = "";
//     for (var i in obj) {
//       if (obj.hasOwnProperty(i)) {
//           resultado += nomeDoObj + "." + i + " = " + obj[i] + "<br>";
//       }
//     }
//     return resultado;
// }

// document.write(mostrarProps(livrosTerror, "livrosTerror"));

// function listarTodasAsPropriedades(o){
// 	var objectoASerInspecionado;
// 	var resultado = [];
// 	for(objectoASerInspecionado = o; objectoASerInspecionado !== null; objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)){
// 	resultado = resultado.concat(Object.getOwnPropertyNames(objectoASerInspecionado));
// 	}
// 	return resultado;
// }
// document.write(listarTodasAsPropriedades);

class Pessoa{
    constructor(nome, email, idade) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }
    mostrar_dados() {
        return this.nome + " " + this.email + " " + this.idade;
    }
}
function enviar_dados() {
    var nome_input = document.getElementById("aaa").value;
    var email_input = document.getElementById("bbb").value;
    var idade_input = document.getElementById("ccc").value;

    //document.write(nome+" "+email+" "+idade)
    var pessoa1 = new Pessoa(nome_input, email_input, idade_input);

    document.write(pessoa1.mostrar_dados());
}

//André
// class Pessoa{
//     metodo(){
//         console.log('Ola')
//     }
//   }
//   class OtraPessoa extends Pessoa{}
  
//   let joao = new Pessoa()
//   let zezinho = new OtraPessoa()
//   joao.metodo()
//   zezinho.metodo()


// Alessandro
// class Cliente extends Pessoa {
//     codigo = gerarCodigo();
// }