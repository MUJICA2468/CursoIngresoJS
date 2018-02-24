function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
		acumulador = acumulador+numero;
		contador++;

		while(numero<1 || numero>10)	
		{

		numero = prompt("¿Desea continuar?");
		
		


		}

	}	

		numero = prompt("¿Quiere continuar?")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN