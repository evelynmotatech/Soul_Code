//Utilizando as funções matematicas crie um script que o usuario digite dois numeros e mostre na tela os numeros escolhidos e raiz quadrada dos mesmos (arredondada);

num1 = prompt("Digite o primeiro número:");
num2 = prompt("Digite o segundo número:");

document.write("O número escolhido foi " ,num1, " e a raiz quadrada dele é " ,Math.round(Math.sqrt(num1)), ".<br>");
document.write("O número escolhido foi " ,num2, " e a raiz quadrada dele é " ,Math.round(Math.sqrt(num2)), ".<br> ");
