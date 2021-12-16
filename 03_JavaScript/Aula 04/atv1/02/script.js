// IMC em adultos Condição
// Abaixo de 18,5 Abaixo do peso
// Entre 18,5 e 25 Peso normal
// Acima de  25 e 30 Acima do peso
// Acima de 30 obeso


var peso = parseFloat(prompt("Digite seu peso em kg"));
var altura = parseFloat(prompt("Digite sua altura em metros"));
var imc = peso/(altura*altura);

if (imc <= 18.5){
    document.write("Abaixo do peso");
} else if ((imc >= 18.5) && (imc < 25)){
    document.write("Peso normal");
} else if ((imc >= 25) && (imc < 30)){
    document.write("Acima do peso");
}else {
    document.write("Obeso");
}