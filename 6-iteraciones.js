//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteaRRciones");
	
	var importeVentas;
	var semana;
	var importeMax;
	var importeMin;
	var contador = 0;

	importeVentas = prompt("Ingrese importe de ventas : ");

	

	while(contador<7){

		contador++;
		importeVentas = prompt("Ingrese importe de ventas : ");
		importeVentas = parseint(importeVentas);

		while(importeVentas<=0){

		importeVentas = prompt("ERROR.Ingrese importe de ventas : ");
	

		}		


	}

	if(contador==0){

		importeMax = importeVentas;
		importeMin = importeVentas;

	}
	

	if(importeVentas>importeMax){

		importeMax=importeVentas;
		importeMin=importeVentas;

	}
	else{
		if(importeVentas<importeMin)
		{

			importeMin=importeVentas;	


		}	


	}
	

	

}

