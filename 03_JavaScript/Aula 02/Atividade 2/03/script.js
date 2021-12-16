//Elabore um script que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento:

// À vista no cartão ou cheque, recebe 10% de desconto
//À vista no dinheiro, recebe 15% de desconto
//Em duas vezes, preço normal de etiqueta sem juros
//Em três vezes, preço normal de etiqueta mais juros de 10%

var valor = 100;
var pag1, pag2, pag3, pag4 = prompt("Escolha entre as opções 1, 2, 3 ou 4");
pag1 = valor_cartao = valor - (valor*0.1);
pag2 = valor_dinheiro = valor - (valor*0.15);
pag3 = valor_2x = valor;
pag4 = valor_3x = valor + (valor*0.1);

if (pag1){
    document.write("O valor da etiqueta é R$100,00. Se o pagamento do produto for à vista no cartão, o valor total dele é " ,valor_cartao, ". Se pagamento do produto for à vista no dinheiro, o valor total dele é " ,valor_dinheiro, ". Se o pagamento for parcelado em 2x, o valor total será " ,valor_2x, " e se o pagamento for parcelado em 3x, o valor total será " ,valor_3x, ".");
} 