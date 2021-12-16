
//Modo escuro e modo claro

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


function increase_size(){
  document.querySelector(".titulolocal").style.fontSize="40px";
}

function decrease_size(){
  document.querySelector(".titulolocal").style.fontSize="30px";
}


//Aumentar e diminuir tamanho de fonte

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
