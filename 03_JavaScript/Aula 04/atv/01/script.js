// Crie uma função que exibe a palavra (ímpar/par) de acordo com o numero digitado pelo usuário.

var num_digitado = parseInt(prompt("Digite um número"));
function impar_par(numero) {
if (numero % 2 == 0){
    alert("Par");
} else {
    alert("Impar")
    }
}

impar_par(num_digitado);