// Crie uma página que sorteia um conjunto de números válidos para um jogo da mega sena. Para a mega sena o mínimo são 6 números, todos contidos no intervalo de 1 a 60, incluindo ambos 1 e 60.
// Nível 1: usando a função Math.random()
// Nível 2: crie uma função random sua para gerar os números.




//sortear os números aleatórios;
function sortearNumero() {
    return Math.round(Math.random() * 60);
}

function gerarAposta() {
    let numerosAposta = [];
    let num = 0;

    while(num < 6) {
        let numeroAleatorio = sortearNumero();
        let validarNumero = false;

        if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {
            for(i = 0; i < numerosAposta.length; i++) {
                if(numerosAposta[i] == numeroAleatorio) {
                    validarNumero = true;
                    // break;
                }
            }
            if(validarNumero == false) {
                numerosAposta.push(numeroAleatorio);
                num++;
            }
        }
    }
    document.write("Os números da mega-sena são: "  ,numerosAposta, ".");
}


// function sorteia_um_numero(){
//     var num = 0;
//     while (true){
//         num = Math.round(Math.random() * 100);
//         if(num > 0 && num <= 80)
//             return num;
//     }
// }

// function veririfica_repetidos(vetor, numero){
//     var i = 0;
//     for(i in vetor){
//         if(vetor[i] == numero)
//             return true;
//     }
//     return false;
// }

// function sortear_quina(){
//     var aposta = [], num_teste = 0, i;
//     document.write("Aposta valida da quina: <br>")
//     for(i=0;i<5;i++){
//         num_teste = sorteia_um_numero();
//         while(veririfica_repetidos(aposta, num_teste))
//             num_teste = sorteia_um_numero();
//         aposta.push(num_teste)
//     }
//     document.write(aposta)
// }