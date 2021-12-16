//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021)

ano = prompt("Digite o ano de nascimento");
function verificaIdade(ano){
    idade = 2021 - ano;
    if (idade >= 18) {
    alert("Maior de idade");
    } else {
    alert("Menor de idade");
}
}
verificaIdade(ano);