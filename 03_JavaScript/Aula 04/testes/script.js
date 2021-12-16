// var idade = function () {
//     while (true) {
//         a = parseInt(prompt("Digite sua idade"))
//         if (a == "" || isNaN(a) || a <= 0 || a > 150){
//             alert("Digite um valor válido para idade");
//         }else{
//             break;
//     }
// }
//     return a;
// }

// for(i=0; i < 10; i++){
//     document.write(idade()," ");
// }


var idade = () => parseInt(prompt("Digite sua idade"));
document.write(idade());