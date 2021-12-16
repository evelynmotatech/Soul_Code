//  Crie uma função que receba 2 numero e retorne a multiplicação deles. Com o valor de retorno, divida por 2 e exiba na tela.

function divisao (numeroUm, numeroDois){
    var numeroUm = parseFloat(prompt("Digite o primeiro número"));
    var numeroDois = parseFloat(prompt("Digite o primeiro número"));
    return ((numeroUm*numeroDois)/2);    
}
alert(divisao());
