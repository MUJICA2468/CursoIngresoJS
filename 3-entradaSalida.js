//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
	
	var largo;
	var ancho;
	var perimetro; 
	var metroDeAlambre;

	largo = document.getElementById('largo').value;

	ancho = document.getElementById('ancho').value;

	largo = 2*largo;
	largo = parseInt(largo);
	ancho = 2*ancho;
	ancho = parseInt(ancho);

	perimetro = largo+ancho;

	metroDeAlambre = 6*perimetro;

	alert(metroDeAlambre);

}

