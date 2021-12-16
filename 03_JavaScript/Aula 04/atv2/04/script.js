// Crie uma função que receba dois números e informe qual o maior entre eles.

numeroUm = parseInt(prompt("Digite o primeiro número"));
numeroDois = parseInt(prompt("Digite o segundo número"));

function comparacao(numeroUm, numeroDois){
    if(numeroUm > numeroDois){
        alert(numeroUm);
    }else{
        alert(numeroDois)
    }
}

comparacao(numeroUm, numeroDois);