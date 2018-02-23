function Mostrar()
{
//rehacer
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	while(respuesta=="si")
	{


		contador = contador+1;
		numero = prompt("Ingrese si");
		numero = parseInt(numero);
		respuesta = acumulador+numero;


	}	




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN