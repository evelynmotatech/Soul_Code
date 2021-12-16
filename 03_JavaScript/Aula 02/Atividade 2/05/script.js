idade = prompt("Digite sua idade")

if (idade >= 70){
    alert("Não obrigatório");
} else if(idade >=18){
    alert("Voto obrigatório");
} else if(idade >= 16){
    alert("Voto opcional");
} else {
    alert("Não precisa votar");
}
