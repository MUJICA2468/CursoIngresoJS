function Mostrar()
{

	var numeroA; 
	var numeroB;
	var numeroC;
	var mayor;

	numeroA = prompt("A - Ingrese numero : ");
	numeroA = parseInt(numeroA);

	numeroB = prompt("B - Ingrese numero : ");
	numeroB = parseInt(numeroB);
 
	numeroC = prompt("C - ingrese numero : ");
 	numeroC = parseInt(numeroC);

	if(numeroA>numeroB||numeroB<numeroA)
	{

		mayor = numeroA;

	}	
	else{
		if(numeroA<numeroB||numeroB>numeroA)
		{


			mayor = numeroB;

		}
		else{


			mayor = numeroC	

		}
	
	}

	


/////

	if(numeroA>numeroC||numeroC<numeroA)
	{


		mayor = numeroA;			

	}	
	else{
		if(numeroA<numeroC||numeroC>numeroA)
		{


			mayor = numeroC;



		}	
		else{

			

			mayor = numeroB;

		}


	}

	
/////

	if(numeroB>numeroC||numeroC<numeroB)
	{


		mayor = numeroB;			

	}	
	else{
		if(numeroB<numeroC||numeroC>numeroB)
		{


			mayor = numeroC;



		}	
		else{

			
			mayor = numeroA;


		}


	}

	alert(mayor);
}
