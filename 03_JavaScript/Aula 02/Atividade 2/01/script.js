// Faça um script que mostre na tela se um número é positivo, negativo ou nulo (zero);

var num;

num = prompt("Digite um número");
if (num > 0){
    document.write("O número é Positivo");
}

if (num < 0){
    document.write("O número é negativo");
}

if (num == 0) {
    document.write("O número é nulo");
}