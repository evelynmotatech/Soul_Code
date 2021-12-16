sensor_incendio_1_andar = 0;
sensor_incendio_2_andar = 0;
alarme = 0;

alarme = sensor_incendio_1_andar || sensor_incendio_2_andar  ? 1 : 0;
document.write(alarme);

document.write("<br><br>");

var sensor_1 = true;
var sensor_2 = true;
var alarme2 = true;
alarme2 = sensor_1 || sensor_2 ? true : false;
document.write(alarme2);

document.write("<br><br>");

var sensor_incendio_1_andar = false;
var sensor_incendio_2_andar = false;
var maquina_ligada = true;
var alimentacao_eletrica = true;
var alarme = false;

// O alarme deve ser acionado se não houver alimentação ou incendio em algum dos andares
alarme = !alimentacao_eletrica || (sensor_incendio_1_andar || sensor_incendio_2_andar) ? true : false;
document.write(alarme);

document.write("<br><br>");

