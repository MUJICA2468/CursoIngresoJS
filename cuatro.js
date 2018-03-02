function Mostrar()
{


	var numeroA;
	var numeroB;
	var resultado;

	numeroA = prompt("ingrese numero : ");
	numeroB = prompt("ingrese numero : ");


	if(numeroA == numeroB)
	{

		resultado = numeroA+numeroB;



	}	
	else
	{
		if(numeroA < numeroB)
		{


			resultado = numeroA*numeroB;


		}	
		else
			if(numeroA > numeroB)
			{

				resultado = numeroA-numeroB;


			}	


	if(numeroA==numeroB)		
	{


		resultado = numeroA*numeroB;
		



	}	
	


	document.write("Es PAR"+resultado);




}
