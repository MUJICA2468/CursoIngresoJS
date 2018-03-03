//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");
	
	var nota;
	var sexo;
	var acumulador;
	var notaMin;
	var notaMax;

	nota = prompt("Ingrese notas");


	for(i = 0 ; i < 6 ; i++)	
	{
		while(sexo != "f" && sexo != "m"){


			sexo = prompt("Ingrese sexo : ");



		}
		while(nota<0 || nota >0){


			nota = prompt("Ingrese nota");
			nota = parseInt(nota);


		}

		acumulador += nota;
	}


	if(i == 0){

		notaMin = nota;

	}
	else{
		if(nota<notaMin)
		{

			notaMin=nota;


		}	

	}
	if(nota>=6 && sexo=="m"){


		contador++;



	}
}

