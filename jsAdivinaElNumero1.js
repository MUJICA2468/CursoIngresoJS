/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var usuario; 

function comenzar()

{
	
	numeroSecreto = Math.floor(Math.random(1)*100+1);//Genero el número RANDOM entre 1 y 100
	 
	
	contadorIntentos = 0
	


	console.log(numeroSecreto);									//alert(numeroSecreto );
	
}

function verificar()
{


	usuario = document.getElementById('numero').value;
	
	contadorIntentos = contadorIntentos+1;

	document.getElementById('intentos').value = contadorIntentos;


	if(contadorIntentos>9)
	{
		alert("Fin del juego");
		return 

	}



	
	if(numeroSecreto==usuario)	
	{

		alert("USTED ES UN WINER");

	}	
	else{
		
		if(numeroSecreto>usuario)
		{

			alert("FALTA");


		}
		else{

		
			alert("SE PASO");	


		}


	}
	
	

}