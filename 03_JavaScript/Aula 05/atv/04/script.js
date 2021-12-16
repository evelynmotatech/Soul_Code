// .Crie um script onde o usuario digite um numero e esse mesmo seja subtraido de um numero randomico(0 - 1000) e mostre na tela o resultado absoluto do mesma bem como o numero escolhido pelo usuario e o numero randomico;


num1 = prompt("Digite o primeiro número:");
num_rand = Math.random()*1000;
div= (num1 - num_rand);

document.write("Os número escolhido foi " ,num1, ". O número randômico foi: " ,num_rand, ". O resultado absoluto da subtração foi: " ,Math.abs(div), ".");
