/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	
	var y;
	var resto;


	y = document.getElementById('sueldo').value;
	y = parseInt(y);
	
	
	resto = y+y*10/100;

	document.getElementById('resultado').value = resto;
	
	

	
	



	
	

}
