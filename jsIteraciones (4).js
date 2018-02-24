function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);



	while(isNaN(numero) || (!(numero>=0 && numero<=10)))   //Preguntar por lo que no quiero que suceda
	{


		numero = prompt("Proba de nuevo");
		

	}	

	alert("Bien");

}//FIN DE LA FUNCIÓN