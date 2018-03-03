//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");
	
	var numeros;
	var resultado;


	numeroA = prompt("Ingresar numero 1 : ");
	numeroA = parseInt(numeroA);

	numeroB = prompt("Ingresar numero 2 : "); 
	numeroB = parseInt(numeroB);

	if(numeroA==numeroB)	
	{

		resultado = numeroA*numeroB;


	}	
	else{
		if(numeroA>numeroB)
		{

			resultado = numeroA-numeroB;



		}	
		else{

			resultado = numeroA+numeroB;
			resultado = parseInt(resultado);

		}
	
	}

	document.write(resultado);

}

