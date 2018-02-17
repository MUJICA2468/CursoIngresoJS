function Mostrar()
{

	var numero_a;
	var numero_b

	numero_a = prompt("NUMERO A: ");
	numero_a = parseInt(numero_a);
	numero_b = prompt("NUMERO B: ");
	numero_b = parseInt(numero_b);


	if(numero_a==numero_b)
	{

		document.write(numero_a*numero_b);

	}
	else
	{
		if(numero_a>numero_b)
		{

			document.write(numero_a-numero_b);

		}	
		else
		{

			document.write(numero_a+numero_b);

		}	


	}


}
