//Crie um array com 101 posições. Cada elemento deve conter o quadrado de seu índice. Ou seja: 0, 1, 4, 9, 16, 25, 36, ..., 10000

var numeros = []; //vetor original

for(var i = 0; i<101; i++){
    numeros[i] = Math.pow(i, 2);
    document.write("Posição " + i + " = " ,numeros[i], ". <br>");
}


