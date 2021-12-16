//Load page
function load_page(){
    alert("Clique em OK para aceitar nossos cookies e continuar navegando em nosso site.");
}

//Dark button and Light button

function dark_button(){
    clearClass();
    document.querySelector(".body_page").classList.add("dark_button");
}

function light_button(){
    clearClass();
    document.querySelector(".body_page").classList.add("light_button");
}

function clearClass(){
    document.querySelector(".body_page").classList.remove("light_button");
    document.querySelector(".body_page").classList.remove("dark_button");
}

//
function increase_size(){
    document.querySelector(".titulolocal").style.fontSize="40px";
}

function decrease_size(){
    document.querySelector(".titulolocal").style.fontSize="30px";
}


//Increases and decreases words.

var size = 17;

function increase(){
    size ++;
    document.body.style.fontSize=size+"px";
    if(size == 40){
        alert("Letra muito grande!");
    }
}

function decrease(){
    size --;
    document.body.style.fontSize=size+"px";
    if(size == 14){
        alert("Letra muito pequena!");
    }
}

//Form

function validateForm() {  
    if (valid) {
      document.getElementsByClassName('step')[currentTab].className += ' finish';
    }
    return valid;
  }

function validaIdade() {
    let idade = document.getElementById('idade').value;
    if (isNaN(idade) || idade == ' ' || idade < 18 || idade >= 110 || idade > 150) {
      document.getElementById('idade').style.backgroundColor = 'red';
     alert("Idade inválida.")
    } else {
      document.getElementById('idade').style.backgroundColor = 'green';      
    }
}
function validaNome() {
    let nome = document.getElementById('nome').value;
    if (!isNaN(nome) || nome == ' ') {
      document.getElementById('nome').style.backgroundColor = 'red';
      alert("Nome inválido.")
    } else {
      document.getElementById('nome').style.backgroundColor = 'green';
    }
}
function validaMotivo() {
    let motivo = document.getElementById('motivo').value;
    if (!isNaN(motivo) || motivo == ' ') {
      document.getElementById('motivo').style.backgroundColor = 'red';
      alert("Motivo inválido.")
    } else {
      document.getElementById('motivo').style.backgroundColor = 'green';
    }
}
function validaEmail() {
    let email = document.getElementById('email').value;    
    if (!isNaN(email) || email == ' ') {
      document.getElementById('email').style.backgroundColor = 'red';
      alert("Email inválido.")
    } else {
      document.getElementById('email').style.backgroundColor = 'green';
    }
}



// function dadosok(){
//     if (nome != "" || nome.length > 3)
//         document.getElementsByClassName("formcliente")[0].style.backgroundColor = "green";
//     if (idade >= 18)
//         document.getElementsByClassName("formcliente")[1].style.backgroundColor = "green";
//     if (motivo != "")
//         document.getElementsByClassName("formcliente")[2].style.backgroundColor = "green";
//     if (email != "")
//         document.getElementsByClassName("formcliente")[3].style.backgroundColor = "green";
// }
