//* Extra : Imagine o seguinte cenário: Marcelo lhe deve um dinheiro e promete pagar em parcelas mensais de R$ 70; com o intuito de prever qual seria o valor devido após o decorrer de 12 meses, você resolve escrever algumas linhas de código (JavaScript). Levando em consideração que o valor devido por Marcelo era de R$ 1400, qual seria o total devido após a execução do trecho a seguir?

var total_divida = 1400;
function atualizar_divida(valor_recebido){
total_divida -= valor_recebido;
return total_divida;
}
for(i=0;i<12;i++){
atualizar_divida(70);
}
alert(total_divida);