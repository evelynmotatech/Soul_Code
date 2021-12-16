var temp = 0;
num1 = parseInt(prompt("Digite o primeiro número"));
num2 = parseInt(prompt("Digite o segundo número"));
num3 = parseInt(prompt("Digite o terceiro número"));
num4 = parseInt(prompt("Digite o quarto número"));

if(num2 >= num1){
    temp = num1;
    num1 = num2;
    num2 = temp;
}
if(num3 > num1){
    temp = num1;
    num1 = num3;
    num3 = temp;
}
if(num4 > num1){
    temp = num1;
    num1 = num4;
    num4 = temp;
}
if(num3 >= num2){
    temp = num3;
    num3 = num2;
    num2 = temp;
}
if(num4 > num2){
    temp = num4;
    num4 = num2;
    num2 = temp;
}
if(num4 >= num3){
    temp = num4;
    num4 = num3;
    num3 = temp;
}

document.write(num1, ", " ,num2, ", " ,num3, ", " ,num4, "<br>");
document.write(num4, ", " ,num3, ", " ,num2, ", " ,num1);