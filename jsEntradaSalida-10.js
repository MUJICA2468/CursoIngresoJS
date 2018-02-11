/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	

	var x;
	var resto;


	x = document.getElementById('importe').value;
	x = parseInt(x);
	
	
	resto = x*25/100;

	document.getElementById('resultado').value = resto;
	
	









}
