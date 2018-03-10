function Mostrar()
{
/*
	var largo;
	var ancho;
	var resultado;
	var perimetro;



	largo = document.getElementById("alrgo").value;
	largo = parseInt(largo);

	ancho = document.getElementById("ancho").value;
	ancho = parseInt(ancho)

	largo = 2*largo;

	ancho = 2*ancho;

	resultado = largo + ancho;

	alert("El perimetro es " + resultado);
*/

	var sueldo;
	var porcentaje;
	var descuento;
	var iva;
	var resultadoDes;
	var resultadoIva;

	sueldo = document.getElementById("alrgo").value;
	sueldo = parseInt(sueldo);

	porcentaje = document.getElementById("ancho").value;
	porcentaje = parseInt(porcentaje);


	descuento = sueldo*porcentaje/100; // esto es para sacar el porcentaje de un sueldo
	
	resultadoDes = sueldo - descuento;

	
	iva = resultadoDes * 21/100; 

	
	resultadoIva = resultadoDes + iva;

	 
	
	alert(resultadoDes);
	alert(resultadoIva);

}
