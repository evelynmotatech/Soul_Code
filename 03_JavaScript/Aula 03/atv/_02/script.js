// Desenvolver um algoritmo onde o usuário determina quantidade de valores que será solicitado ao usuário. Calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos.

var quantidade, media;
var soma_media = 0;
var positivos = 0;
var negativos = 0;
var valor = 0;

quantidade = parseInt(prompt("Digite a quantidade de números que serão usados para fazer a média aritimética:"));

for(i = quantidade; i >0; i--){
    valor = parseInt(prompt("Digite os valores"));
    soma_media = (soma_media + valor);
    if (valor > 0){
        positivos++;
    } else {
        negativos++;
    }
}
media = soma_media/quantidade;
document.write("A média aritimética é " ,media, " . Foram digitados " , positivos, " números positvos e " , negativos, " números negativos.")