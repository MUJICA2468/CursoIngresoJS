function Mostrar()
{

	var edad;
	edad = document.getElementById('edad').value;


		if(edad>=18)
		{
			
			alert("Mayor de edad");
			
		}
			
		else
		{
			if(edad>=13&&edad<=17)
			{

				alert("adolescente");


			}
			else
			{


				alert("Menor que 13");

			}
		
		}
			
}//FIN DE LA FUNCIÓN