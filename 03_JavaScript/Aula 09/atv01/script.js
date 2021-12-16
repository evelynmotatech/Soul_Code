// Posição do catactere

var txt = "abcdefghijklm";
var pos = txt.indexOf("h");
document.write("Posição: " ,pos, ". <br>");

// Slice para retornar "bananas";

var txt = "Posso comer bananas o dia todo";
document.write(txt.slice(11,19), "<br>");

//Substituir palavras

var txt = "Olá, mundo";
txt = txt.replace("Olá, bem vindo.");
document.write(txt.replace("Olá, mundo", "Olá, bem vindo. <br>"));

// Converter para maiusculas;

var txt = "Olá, mundo. <br>";
document.write(txt.toUpperCase());

// Converter para minusculas
var txt = "Olá, mundo. <br>";
document.write(txt.toLowerCase());

//Comprimento

var txt = "Olá, mundo!";
var x =txt.length;
document.write("Comprimento: " ,x, " letras. <br>");

//Caracteres de escape

var txt = "We are \"Viking\"."
document.write(txt, "<br>");

//Concatenar

var str1 = "Olá";
var str2 = "Mundo!";
document.write(str1 + ", " + str2);