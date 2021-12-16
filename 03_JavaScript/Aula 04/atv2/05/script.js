// Crie uma função que verifica se o numero é primo, se for primo, retorna o numero elevado ao cubo, senão, exibe na tela não é primo. Obs.: o valore retornado deve ser exibido fora da função;

qnt_dividor = 0;
num = parseInt(prompt("Digite um número"));

for(i=1; i<=num; i++){
    if(num % i == 0){
        qnt_dividor++;
    }
}
if (qnt_dividor == 2){
    alert("É primo");
}else{
    alert("Não é primo");
}