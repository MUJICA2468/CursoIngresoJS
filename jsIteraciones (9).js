function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;      //valores opuestos
	var minimo;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		
		numero = prompt("Ingrese numeros: ")
		numero = parseInt(numero);

		while(numero<1 || numero>10)
		{


			numero = prompr("Ingrese numero");
			numero = parseInt(numero);


		}	

	 	if(contador==0)//primera interacción, ya se calcula el maximo y el minimo
		{

			maximo = numero;
			
			minimo = maximo;

		}	
		else
			if(numero>maximo)
			{

				maximo=minimo;

			}	
	
			if(numero<minimo)
			{

				minimo=maximo;


			}	

		
		}	


alert("El minimoes: "+minmo+"El maximo es: "+maximo);
}//FIN DE LA FUNCIÓN