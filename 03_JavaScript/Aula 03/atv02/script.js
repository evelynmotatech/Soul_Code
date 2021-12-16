//Aumento de salário

var categoria = prompt("Digite a categoria, entre A, B e C");
var salario_atual = parseFloat(prompt("Digite o salário"));

switch(categoria){
    case "A", "a":
        document.write("O salário atual é R$ " ,salario_atual, ". Após o aumento de 10%, o salário será R$ " ,(salario_atual*1.1), ".");
    break
    case "B", "b":
        document.write("O salário atual é R$ " ,salario_atual, ". Após o aumento de 10%, o salário será R$ " ,(salario_atual*1.2), ".");
    break
    case "C", "c":
        document.write("O salário atual é R$ " ,salario_atual, ". Após o aumento de 10%, o salário será R$ " ,(salario_atual*1.3), ".");
    break
}