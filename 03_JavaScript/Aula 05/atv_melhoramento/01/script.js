//Crie uma função que recebe 2 parâmetros(numéricos) e retorna a divisão deles. Controle : o usurario não pode digitar letras, não pode acontecer Divisão por 0, sempre dividir o maior numero pelo menor numero e mostrar o numero arredondado;

var num1 = parseInt(prompt("Digite o primeiro número"));
var num2 = parseInt(prompt("Digite o segundo número"));

function divisao(a, b){
    if (num1 == 0 || isNaN(num1) || num2 == 0 || isNaN(num2)){     
        alert("Digite apenas números válidos.");
        return "Digite apenas números válidos";
    }    
    if (num1 > num2){
        return Math.round(num1/num2);
    }
    if (num2 > num1){
        return Math.round(num2/num1);
    }
}
document.write(divisao(num1, num2));