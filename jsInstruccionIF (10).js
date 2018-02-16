function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota_examen;

	nota_examen = Math.floor(Math.random()*10)+1;

	if(nota_examen>8)
	{

		alert("Exelente: "+nota_examen);

	}
	else
		if(nota_examen>3)
		{

			alert("Aprobado: "+nota_examen)

		}	
		else
		{

			alert("Desprobado: "+nota_examen)
			
		}









}//FIN DE LA FUNCIÓN