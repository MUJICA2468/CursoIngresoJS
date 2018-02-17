function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert(mesDelAño);//alert (mesDelAño);
	
switch(mesDelAño){

	case "Febrero":
				   mes =alert("28 DÍAS");
				   break;	
	case "Enero":				
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
					 mes = alert("31 DÍAS");
				     break;	
	case "Abril":			
	case "Junio":
	case "Septiembre":
				      mes = alert("30 DÍAS");
				      break;



}



	



}//FIN DE LA FUNCIÓN