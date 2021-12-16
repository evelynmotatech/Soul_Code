// function cadastrar_frutas(){
//     var frutas = [];
    
//     while(true){
//         aux = prompt("Digite o nome da fruta ou 0 para sair");
//         if(aux == 0)
//             break;
//         else
//             frutas.push(aux);
//     }
//     for (i in frutas){
//         document.write("<br>o nome da fruta é: ",frutas[i],".");
//     }
// }

// var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

// let num = [1,2,3,4,5,6,7,8,9,10]
// console.log(num.splice(4,1))
// console.log(num)

var S = ["A","b","B","C","c","1", "2", "3"]
function inserindo_elementos(){
    S.unshift("a");
    S.push("4");
    
    document.write(S);
}