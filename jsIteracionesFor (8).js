function Mostrar()
{

var numero;
var contador=0;

numero = prompt("Ingrese numero : ");	
numero = parseInt(numero);	

for(i = 0 ; i <=numero ; i++ )
{

	if(numero%i==0)
	{

		contador=contador+1;
		document.write("<br>"+i);
	}	
	
		
		
	
}
	if(contador>2)
		{

			contador=contador+1;
			document.write("<br>"+i+" NO SON PRIMOS");
			

		}	

/*
for(i = 2 ; i <=numero ; i++ )
{

	if(numero%i==0)
	{

		contador=contador+3;
		document.write("<br>"+i);
	}	
	else{
		if(contador>2)
		{

			contador=contador+1;
			document.write("<br>"+i);
			

		}	

	}
}
*/

/*
for(i = 2 ; i <=numero ; i++ )
{

	if(numero%i==1)
	{

		contador=contador+3;
		document.write("<br>"+i);
	}	
	else{
		
		
			document.write("<br>"+i);
			

			

	}
}
*/

}//FIN DE LA FUNCIÓN