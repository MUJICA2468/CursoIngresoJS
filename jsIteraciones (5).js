function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo!="f" && sexo!= "m")	
	{

		sexo = prompt("Pruebe otra véz")

	}	
	//para imprimir el "texto" en la pagina
	if(sexo =="f" )
	{

		document.getElementById('Sexo').value="Femenino";	

	}	
	else
		if(sexo == "m")
		{

			document.getElementById('Sexo').value = "Masculino";

		}	

	//document.getElementById('Sexo').value=sexo;

	
	

}//FIN DE LA FUNCIÓN