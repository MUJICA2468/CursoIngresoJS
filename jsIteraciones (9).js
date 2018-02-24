function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';
	var numero;

	while(respuesta!='no')
	{
		
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		respuesta = prompt("¿Quiere continuar?");

	
	}
	if(contador==0)//<<No se sabe cùal es el numero maximo o minimo
	{

		contador = contador+1;
		maximo = numero;
		minimo = numero;

	}	
	else{
		if (maximo>numero)
		{

			maximo = numero;

		}	
		else{
			if(minimo<numero)
			{


				minimo = numero;
				

			}		


		}

	}	


document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN