//Crie um Script que tenha dois números e mostre o maior deles, ou se eles são iguais.
num1 = prompt("Digite um número");
num2 = prompt("Digite outro número");

if (num1 > num2){
    alert(num1);
} else if (num1 < num2){
    alert(num2);
} else{
    alert("numeros iguais");
}