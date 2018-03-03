function Mostrar()
{

var numero;
var contador=0;

numero = prompt("Ingrese numero : ");	
numero = parseInt(numero);	

for(i = 1 ; i < numero ; i++ )
{

	if(i%2==0)// Va de numero par en numero par, depende del numero par que se coloque
	{

		contador=contador+1;
		document.write("<br>"+i);
	}	

}

}//FIN DE LA FUNCIÓN