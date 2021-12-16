$(document).ready (function () {
    $("span").hide();
});

count = 0;

function validaTitulo() {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = document.getElementById("titulo").value;
    let campo = document.getElementById("titulo");

    if (nome.match(letras) && nome != "") {
        campo.style.border = "2px solid green";
        count ++;
    } else {
        campo.style.border = "2px solid red";
    }
}

function validaAutor() {
    let letras = /^[a-zA-Z\s]*$/;
    let autor_nome = document.getElementById("nomeAutor").value;
    let campoAutor = document.getElementById("nomeAutor");

    if (autor_nome.match(letras) && autor_nome != "") {
        campoAutor.style.border = "2px solid green";
        count ++;
    } else {
        campoAutor.style.border = "2px solid red";
    }
}

function validaAno() {
    let ano = document.getElementById("anoPublicacao").value;
    let campoAno = document.getElementById("anoPublicacao");

    if (ano.length == 4) {
        campoAno.style.border = "2px solid green";
        count ++;
    } else {
        campoAno.style.border = "2px solid red";
    }
}

function validaEditora() {
    let letras = /^[a-zA-Z\s]*$/;
    let editora = document.getElementById("editora").value;
    let campoEditora = document.getElementById("editora");

    if (editora.match(letras) && editora != "") {
        campoEditora.style.border = "2px solid green";
        count ++;
    } else {
        campoEditora.style.border = "2px solid red";
    }
}

function validaGenero() {
    let letras = /^[a-zA-Z\s]*$/;
    let genero = document.getElementById("genero").value;
    let campoGenero = document.getElementById("genero");

    if (genero.match(letras) && genero != "") {
        campoGenero.style.border = "2px solid green";
        count ++;
    } else {
        campoGenero.style.border = "2px solid red";
    }
}

function validarcampos() {
    var span = document.getElementsByTagName("span");
    var b = document.querySelector("button");
    if(count >= 5) {
        b.setAttribute("type", "submit");    
    } else {
        $("span").show();
    }
}
