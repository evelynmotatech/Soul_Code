//Crie um script que contenha uma vetor com n posições(você determina o tamanho do vetor) onde irá guardar números inteiros. Em seguida crie uma função dobra() que irá  duplicar o valor de cada elemento do array. No final, mostre o antes e o depois do vetor:



var numeros = [];

for(i=0; i<=10; i++){
    numeros[i] = i;    
}
document.write("Números iniciais:" ,numeros, ". <br>");
var dobro = [];
function dobra(x){    
    for(i=0; i<=10; i++){        
        dobro[i] = numeros[i]*2;        
    }    
}
dobra(numeros);
document.write("Números dobrados: " ,dobro, ".");