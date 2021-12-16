//  01.Informe qual código para realizar o que se pede nos itens abaixo:
//  a. Multiplique 10 com 5 e exiba o resultado;
// b. Divida 10 com 2 e exiba o resultado;
// c. Exiba o restante quando for dividido 18 por 9;
// d. Use o operador de atribuição correto que resultará em x ser 15;  x = 10, y = 5;
// e. Use o operador de atribuição correto que resultará em x ser 50; x = 10, y = 5;

// //a)
// num1 = 10;
// num2 = 5;
// multiplicacao = (num1 * num2);
// document.write(" A multiplicação de ", num1, " e " ,num2, " é: " ,multiplicacao, ".<br>");
// //b)

// num1 = 10;
// num2 = 2;
// divisao = (num1 / num2);
// document.write(" A divisão de ", num1, " e " ,num2, " é: " ,divisao, ".<br>");

// //c)
// num1 = 18;
// num2 = 9;
// resto = 18%9;
// document.write(" O resto da divisão de ", num1, " e " ,num2, " é: " ,resto, ".<br>");

// //d)
// x = 10;
// y = 5;
// x = x+ y;
// document.write(x, "<br>");

// //e)
// x = 10;
// y = 5;
// x = x * y;
// document.write(x, "<br>");

// 02.Considerando a, b, c e d como variáveis com valores iniciais iguais a 5, 7, 3 e 9,
// respectivamente, assinale a opção correta.
// a. O resultado da expressão (a != 3 || b < 10 || c == 5) é falso.
// b. O resultado da expressão (d > 8 && c == 3 || a >= 10) é verdadeiro.
// c. O resultado da expressão (d == 12 && a != 10) é falso.
// d. O resultado da expressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) é falso.
// e. O resultado da expressão (a == 3 || b > 10 || d == 8 ) é verdadeiro.

// document.write("Opção correta: D. <br>");

// 3. Escreva um script usando as 03 estruturas de repetição estudadas (while, do...while, for), para escrever na tela de 0 a 1000.

//while
// count = 0;
// while(count <= 1000){
//     document.write(count, ", <br>");
//     count++
// }

//do...while
// count = 0;
// do{
//     document.write(count, ",<br> ");
//     count++;
// }while (count <= 1000);

//for
// for(count = 1; count <= 1000; count++){
//     document.write(count, " ");    
// }


// // 04 Escreva a estrutura de condição para fazer as seguintes verificações:
// // a. Numero impar ou par;
// // b. Numero é múltiplo de 3;
// // c. Numero é primo;
// // d. Numero1 é maior que numero2;

// num1 = 9;
// if (num1 % 2 == 0){
//     document.write("Número par <br>");
// }else{
//     document.write("Número ímpar <br> <br>");
// }

// num1 = 15;
// if (num1 % 3 == 0){
//     document.write("Número múltiplo de 3. <br>");
//     }else{
//         document.write("Número não múltiplo de 3 <br>")
// }

// num1 = 6;
// num2 = 14;
// if (num1 > num2){
//     document.write("Número 1 é maior que Número 2. <br>")
// }else{
//     document.write("Número 2 é maior que Número 1. <br>")
// }

// 05. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert ou document.
// num1 = parseInt(prompt("Digite o primeiro número"));
// num2 = parseInt(prompt("Digite o segundo número"));
// aux1 = num2;
// aux2 = num1;

// document.write("O primeiro número é: " , num1, " e o segundo número é: " ,num2, ". Após a inversão, o primeiro número será: " , aux1, " e o segundo número será: " ,aux2, ". <br>")

// 06. Execute a função chamada myFunction.
// function myFunction () {
//     alert ("Olá, mundo!");
// }
// myFunction();

// 07. Crie uma função que retorno a multiplicação de um numero por 2 e com o resultado, eleve ao quadrado.

// num1 = parseInt(prompt("Digite um número:"));
// num_quad = Math.pow(num1,2);
// function mult (numero){
//     valor = num1*2;
//     return valor;    
// }
// document.write(mult());
// document.write(" <br>O resultado da multiplicação elevado ao quadrado é: " ,num_quad, ". <br>");

// 08. Utilizando as funções math faça o que se pede:
// a. Use o método matemático correto para criar um número aleatório.
// b. Use o método matemático correto para retornar o maior número de 10 e 20.
// c. Use o método matemático correto para arredondar um número para o inteiro mais próximo.
// d. Use o método matemático correto para obter a raiz quadrada de 9.

// a)

// document.write("Número aleatório: " ,Math.random(),". <br>");

// num1 = 10;
// num2 = 20;
// document.write(Math.max(num1, num2), "<br>");

// num1 = 5.876;
// document.write(Math.round(num1), "<br>");

// num1 = 9;
// document.write("Raiz quadrada de 9 é: " ,Math.sqrt(num1), ".<br>");

// 09. Crie um script para alertar "Hello World" se x for maior que y, caso contrário, alertar "Goodbye".
// x = prompt("Digite o primeiro número");
// y = prompt("Digite o segundo número");

// if ( x > y){
//     alert("Hello world.")
// } else {
//     alert("Goodbye.")
// }

// 10. Usando switch case, faça um script que alertará "Olá" se a fruta for "banana" e "Bem-vindo" se a fruta for "maçã".

// var fruta = (prompt("Escolha banana ou maçã"));

// switch (fruta){
//     case "banana":
//         alert("Olá");  
//         break  
//     case "maça":
//         alert("Bem-vindo");
//         break;
//     default:
//         alert("Escolha banana ou maçã")
//         break;
// }
