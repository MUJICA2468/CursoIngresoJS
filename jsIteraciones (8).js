function Mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta ='si';
	var numeroUsuario;

	while(respuesta=="si")
	{

		numeroUsuario = prompt("Ingrese un numero: ");
		numeroUsuario = parseInt(numeroUsuario); // <<<<Ya esta parseado èsta variable, no es necesario parsear las variables "positivo" y "negativo"
		
		contador = contador+1;
		
		respuesta = prompt("¿Quiere continuar?");

		if(numeroUsuario<0)	
		{


			;

			negativo = negativo*numeroUsuario;
			


		}	
		else if(numeroUsuario>0)
		{

			
			positivo = positivo+numeroUsuario;


		}	
	
	}	
	
	





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN