// Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar a maior altura e a menor altura
var menor =0, maior = 0;
for(i=1; i<=15; i++){
    msg = "Digite a altura do individuo" + i;
    altura = prompt(msg);
    if (i==1){
        menor = altura;
    }
    if (altura < menor){
        menor = altura;
    }
    if (altura > maior){
        maior = altura;
    }
}

document.write("A maior altura é " , maior, "metros e a menor altura é " ,menor, " metros.");