//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021) .Controle : o usuário não pode digitar idade negativa ou acima de 130 anos por exemplo;

var ano_nascimento = parseInt(prompt("Digite o seu ano de nascimento"));
var idade = (2021 - ano_nascimento);

function validaIdade(a){
    if (idade < 0 || idade > 130){
        return "Idade não válida";
    }    
    if (idade >= 18){
        return "Maior de idade";
    }
    if (idade < 18){
        return "Menor de idade";
    }    
}
alert(validaIdade(idade));