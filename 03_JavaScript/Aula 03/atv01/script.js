//Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.

var numero = parseInt(prompt("Digite um nuúmero inteiro de 0 a 10"));

switch(numero){
    case 0:
        document.write("zero");
        break;
    case 1:
        document.write("Um");
        break;
    case 2:
        document.write("Dois");
        break;
    case 3:
        document.write("Três");
        break;
    case 4:
        document.write("Quatro");
        break;
    case 5:
        document.write("Cinco");
        break;
    case 6:
        document.write("Seis");
        break;
    case 7:
        document.write("Sete");
        break;
    case 8:
        document.write("Oito");
        break;
    case 9:
        document.write("Nove");
        break;
    case 10:
        document.write("Dez");
        break;
    default:
        document.write("Número não válido. Escreva um número de 0 a 10.")
    break;
}
