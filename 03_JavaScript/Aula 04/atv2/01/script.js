// Crie uma função que verifica se o numero digitado pelo usuário é múltiplo de 5;

var numero_digitado = parseInt(prompt("Digite um número"));
function multiplo_de_5 (numero){
    if (numero % 5 == 0){
        alert ("Múltiplo de 5")
    } else {
        alert("O número não é múltiplo de 5")
    }
}
multiplo_de_5(numero_digitado);