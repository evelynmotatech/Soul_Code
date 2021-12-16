//Crie um script onde o usuario digite 2 numeros e realize a divisão entre os dois sendo sempre dividido o maior pelo menor , apos exiba na tela os numeros escolhidos e o resultado da divisão arredondado para baixo(floor);

num1 = prompt("Digite o primeiro número:");
num2 = prompt("Digite o segundo número:");
div= 0;

if (num1 > num2) {
    div= (num1/num2);
} else{
    div = (num2/num1);
}

document.write("Os números escolhidos foram: " ,num1, " e " ,num2, ". E a divisão deles é: " ,Math.floor(div), ".");
