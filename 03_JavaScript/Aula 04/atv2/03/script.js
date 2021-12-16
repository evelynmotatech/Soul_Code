// Crie uma função que informe se o sexo é feminino ou masculino. ex: usuário digitou 'F,' programa retorna: é feminino!.

var digitado = (prompt("Digite F para gênero Feminino e M para gênero Masculino"));

function genero (){   
    if(digitado == "F" || digitado == "f"){
        return "Gênero feminino";
    }
    
    if(digitado == "M" || digitado == "m"){
        return "Gênero masculino";
    }
  
    if (digitado != "F" || digitado != "M" || digitado != "f" || digitado != "m"){
        return "Entrada não válida. Digite F para gênero Feminino e M para gênero Masculino."
    }
}
alert(genero(digitado));
