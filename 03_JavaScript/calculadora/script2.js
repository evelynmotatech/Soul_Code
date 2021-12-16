function insert (num){
    var numeros = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = (numeros + num);
}

function clean(){
    document.getElementById("resultado").innerHTML = "";
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function raiz(){
    var raiz_quadrada = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = Math.sqrt(raiz_quadrada).toPrecision(3);
}

function xquad(){
    var quadrado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = Math.pow(quadrado,2).toPrecision(3);
}

function xcubo(){
    var cubo = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = Math.pow(cubo,3).toPrecision(3);
}

function pi(){
    var pi = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = Math.PI.toPrecision(3);
}

function calc(){
    var resultado = document.getElementById("resultado").innerHTML;
   
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("resultado").innerHTML = "Sem valor";
    }
}