// class Pessoa{
//     nome!: String
//     idade!: Number
//     cpf!: String

//     constructor(nome:string,idade:number,cpf:string){
//         this.nome = nome;
//         this.idade = idade;
//         this.cpf = cpf;

//         //this.nome_que_tem_na_classe = parametro_que_tem_no_constructor:tipo_do_parametro
//     }

//     escreverPropriedade(){
//         console.log(this.nome);
//         console.log(this.idade);
//         console.log(this.cpf);
//     }
// }

// let pessoa = new Pessoa("Evelyn", 27, "06240343560");

// pessoa.escreverPropriedade();

// class Carro{
//     modelo!: String
//     ano!: Number
//     cor!: String

//     constructor(modelo:string,ano:number,cor:string){
//         this.modelo = modelo;
//         this.ano = ano;
//         this.cor = cor;
//     }
//     definirCarro(){
//         console.log(this.modelo);
//         console.log(this.ano);
//         console.log(this.cor);
//     }    
// }

// let carro_1 = new Carro("Uno", 2015, "Azul");
// let carro_2 = new Carro("Onix", 2019, "Preto");

// carro_1.definirCarro();
// carro_2.definirCarro();

//Encapsulamento

class Pessoa{
    constructor(private nome:string,private idade:number,private cpf:string){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    escreverPropriedade(){
        console.log(this.nome);
        console.log(this.idade);
        console.log(this.cpf);
    }
    getNome(){
        return this.nome;
    }
    setNome(nome:string){
        return this.nome = nome
    }
    getIdade(){
        return this.idade;
    }
    setIdade(idade:number){
        return this.idade = idade
    }
    getCpf(){
        return this.cpf;
    }
    setCpf(cpf:string){
        return this.cpf = cpf
    }
}

let pessoa = new Pessoa("Evelyn", 27, "06240343560");

pessoa.escreverPropriedade();
console.log(pessoa);
console.log(pessoa.getNome());
console.log(pessoa.setNome("Eleonora"));