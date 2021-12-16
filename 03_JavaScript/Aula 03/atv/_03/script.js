//  Escrever um algoritmo que leia 10 números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve informar ao usuário quando o numero lido um número negativo.

var num = 0;
intervalo_0_25 = 0;
intervalo_26_50 =0;
intervalo_51_75 = 0;
intervalo_76_100 = 0;

for(i=1; i<=10; i++){
    msg = "Digite o número entre 0 e 100";
    num = prompt(msg);
    if (num <= 25){
        intervalo_0_25++;
    }
    if ((num >= 26) && (num <=50)){
        intervalo_26_50++;
    }
    if ((num >= 51) && (num <=75)){
       intervalo_51_75++;
    }
    if ((num>=76) && (num <= 100)){
        intervalo_76_100++;
    }
    if (num < 0){
        alert("Número negativo");
    }
   
    if(num > 100){
        alert("Número não-válido. Digite um número entre 0 e 100.");
    }
}

document.write("A quantidade de números no intervalo de 0 a 25 é " , intervalo_0_25, ", de números no intervalo de 26 a 50  é " ,intervalo_26_50, " , de números no intervalo de 51 a 75 é " ,intervalo_51_75, " e no intervalo de 76 a 100 é " ,intervalo_76_100, " .");