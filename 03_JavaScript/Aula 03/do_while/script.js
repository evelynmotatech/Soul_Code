count = 0;

do{
    idade = prompt("Digite sua idade");
    aux = parseInt(idade);
    aux2 = idade - aux;

    if (idade < 0 || idade > 200 || aux2 != 0 || idade == " " || isNaN(aux)){
        alert("Idade inválida. Digite novamente.");
        temp = 1;
    } else {
        alert("Idade válida");
        temp = 0;
    }

} while(temp==1);
