
function Mostrar()
{

	var base;
	var altura;
	var perimetro;
	var superficie;

	base = document.getElementById('laBase').value;
	base = parseInt(base);
	
	altura = prompt("Ingrese altura : ")
	altura = parseInt(altura);

	perimetro = 3*base;

	superfice = base*altura/2;


	alert("La superficie es: " + superfice);

	alert("El perimetro es : " + perimetro);
}
