//Crie uma função que pede ao usuário para digitar um valor e calcular 5% de desconto retornando o valor do desconto.
function desconto (){
    valor =parseInt(prompt("Digite um valor para calcular o desconto"));
    desc = valor * 0.05;
    return desc;
}

alert(desconto());