function Mostrar()
{

	var edad;
	var estado_civil;

	edad = document.getElementById('edad').value;
	estado_civil= document.getElementById('estadoCivil').value;


	if(estado_civil=="Soltero")
	{
		if(edad<18)
		{

			
		}	

	}
	if(estado_civil=="Casado")
	{
		if(edad<18)
		{

			alert("Es muy pequeño para NO ser soltero");
		}


	}
	if(estado_civil=="Divorciado")
	{
		if(edad<18)
		{

			alert("Es muy pequeño para NO ser soltero");
		}


	}

}