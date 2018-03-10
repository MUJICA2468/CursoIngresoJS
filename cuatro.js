function Mostrar()
{

	var numeroA;
	var numeroB;
	var mensaje;


	numeroA = prompt("Ingrese el primer numero");

	numeroB = prompt("Ingres el segundo numero");

	if(numeroA == numeroB){

		mensaje = numeroA + numeroB;

	}
	else{
		
		numeroA = parseInt(numeroA);
		numeroB = parseInt(numeroB);

		if(numeroA > numeroB){

			mensaje = numeroA - numeroB;


		}
		else{

			mensaje = numeroA * numeroB;s

		}
	}


	alert(mensaje);


}
