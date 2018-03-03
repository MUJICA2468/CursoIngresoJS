function Mostrar()
{

var numero;
var contador=0;

numero = prompt("Ingrese numero : ");	
numero = parseInt(numero);	

for(i = 1 ; i <= numero ; i++ )
{

	if(numero%i==0)//Se imprimen numeros divisores del numero que se ingrese en la pagina
	{

		contador=contador+1;
		document.write("<br>"+i);
	}	

}


}//FIN DE LA FUNCIÓN