//Faça um script onde informe a quantidade de dias do mês de acordo com o mês. Utilize switch com break.

var dias_mes = parseInt(prompt("Escolha o número de um mês:"));

switch (dias_mes) {
    case 1:
        document.write("Janeiro: 31 dias");
        break
    case 2:
        document.write("Fevereiro, 28 dias");
        break
    case 3:
        document.write("Março, 31 dias");
        break
    case 4:
        document.write("Abril, 30 dias");
        break
    case 5:
        document.write("Maio, 31 dias");
        break
    case 6:
        document.write("Junho, 30 dias");
        break
    case 7:
        document.write("Julho, 31 dias");
        break
    case 8:
        document.write("Agosto, 31 dias");
        break
    case 9:
        document.write("Setembro, 30 dias");
        break
    case 10:
        document.write("Outubro, 31 dias");
        break
    case 11:
        document.write("Novembro, 30 dias");
        break
    case 12:
        document.write("Dezembro, 31 dias");
        break
    default:
        document.write("Não se aplica")
        break
}