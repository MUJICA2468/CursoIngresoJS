function Mostrar()
{

	var contador = 0;
	var respuesta = "continuar";
	var temperatura;
	var temperaturaPar = 0;
	var temperaturaImpar = 0;
	var temperaturaMax = 0;
	var temperaturaMin = 0;


	while(respuesta != "no"){//

		temperatura = prompt("Ingrese temperatura ");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura < -100 || temperatura > 100){

			temperatura = prompt("Ingrese temperatura entre -100 y 100 POR FAVOR");
			temperatura = parseInt(temperatura);

		}

		respuesta = prompt("¿Desea continuar? Ingrese NO para salir");
		while(respuesta != "continuar" && respuesta != "no"){

			respuesta = prompt("Solo Ingrese continuar o no");
		

		}

		if(temperatura % 2 == 0 && temperatura != 0){

			temperaturaPar++;


		}
		else{
			if(temperatura == 0){

				temperaturaImpar++;

			}
		}

	}//
	alert(temperaturaPar);


}
