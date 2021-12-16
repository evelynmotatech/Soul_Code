function validar(){
    var nome = document.getElementById('nome').value;
    var idade = fdocument.getElementById('idade').value;;
    var motivo = document.getElementById('motivo').value;
    var email = document.getElementById('email').value;

    if (nome == "" || nome.length < 3) {
        alert("Dados inválido, preencha o nome");
        formulario.nome.focus();
        document.getElementsByClassName("formcliente")[0].style.backgroundColor = "red";
        return false;
    } else {
        document.getElementsByClassName("formcliente")[0].style.backgroundColor = "green";
    }

    if (idade == "" || idade < 18 || isNaN(idade)) {
        alert("Preencha a idade ou menor de idade");
        formulario.idade.focus();
        document.getElementsByClassName("formcliente")[1].style.backgroundColor = "red";
        return false;
    } else {
        document.getElementsByClassName("formcliente")[1].style.backgroundColor = "green";
    }

    if (motivo == "" || motivo.length <= 3) {
        alert("Dados inválido, preencha o motivo");
        formulario.motivo.focus();
        document.getElementsByClassName("formcliente")[2].style.backgroundColor = "red";
        return false;
    }else{
        document.getElementsByClassName("formcliente")[2].style.backgroundColor = "green";
    }

    if (email == "") {
        alert("Dados inválido, preencha o e-mail");
        formulario.email.focus();
        document.getElementsByClassName("formcliente")[3].style.backgroundColor = "red";
        return false;
    } else {
        document.getElementsByClassName("formcliente")[3].style.backgroundColor = "green";
    }

}