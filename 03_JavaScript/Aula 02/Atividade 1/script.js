var a =3;
var b = 5;

document.write(a >= b ? "a maior que b" : "a menor que b");
document.write("<br><br>");

if (a >= b){
    document.write("a maior ou igual a b");
} else {
    document.write("a menor que b");
}
document.write("<br><br>");

var idade = 16;

if (idade >= 18){
    document.write("maior de idade");
}else if (idade >= 12){
    document.write("adolescente");
} else {
    document.write("menor de idade");
}

document.write("<br><br>");

var nota1 = 6;
var nota2 = 8;
var nota3 = 10;
media = (nota1 + nota2 + nota3)/3;

document.write("A média do aluno foi " ,media,". <br>")
if (media >= 7) {
    document.write("Aluno aprovado")
} else {
    document.write ("Aluno reprovado");
}
document.write("<br><br>");

var peso = 63;
var altura = 1.60;
var imc = peso/(altura*altura);

if (imc <= 18.5){
    document.write("Abaixo do peso");
} else if (imc > 24.5){
    document.write("Peso normal ou saudável");
} else if (imc >= 30){
    document.write("Obesidade");
}