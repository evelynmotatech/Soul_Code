// Desenvolver um algoritmo que leia a idade de 10 pessoas. O programa deve falar quantos são de maior e quantos são de menor;

var maior = menor = 0;

for(i=1; i<=10; i++){
    msg = "Digite a idade do individuo " + i;
    idade = prompt(msg);
   if(idade >= 18){
       maior++;
   }
   if (idade < 18){
       menor++;
   }
}

document.write (maior, " pessoas são maiores de idade e " ,menor, " pessoas são menores de idade.");
