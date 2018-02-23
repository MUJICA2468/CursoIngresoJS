function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var interaciones = 50;
	var promedio;

//interaciones : numero de intentos
//while(contador<interaciones)
//while(contador<5)
	while(contador<interaciones)
	{

		contador = contador+1;
		numero = prompt("Ingrese el numero");
		numero = parseInt(numero);
		acumulador = acumulador+numero;


	}	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
	//document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN