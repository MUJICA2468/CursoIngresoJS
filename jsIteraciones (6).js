function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	


	while(contador<5)//Luego éste
	{

		 numero = prompt("Ingrese numero: ");
		 numero = parseInt(numero);

		 while(numero<1 || numero>10)//Primero se ejecuta éste
		 {


		 	numero = prompt("Ingrese numero del 1 al 10: ");
			numero = parseInt(numero);

		 }	

		 contador = contador+1;
		 //contador++;

		 acumulador = acumulador+numero;
		 //acumulador += numero;
	}	





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN