function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

	
					
	case "Febrero":
					mes = alert("Este dia no tiene mas de 29 dias");
					break;
	case "Enero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
					 mes = alert("Este dia tiene 30 o más días")	
					 break;


}


	
	


}//FIN DE LA FUNCIÓN