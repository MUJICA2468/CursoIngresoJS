/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;	
	var resultado;



	importe = document.getElementById('sueldo').value;
	resultado = document.getElementById('resultado').value;



	importe = parseInt(importe);
	resultado = (importe % 10);

	alert(resultado);
















}
