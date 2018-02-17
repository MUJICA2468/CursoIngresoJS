function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño){

	case "Enero":
	case "Febreo":
	case "Marzo":			
	case "Abril":
	case "Mayo":
	case "Junio":
				 mes = alert("Falsta para el invierno");
				break;		
	case "Julio":
	case "Agosto":
				  mes = alert("Abrigate que hace frio");
				  break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
				     mes = alert("Ya pasamos el frio, ahora CALOR!!!");
				     break;

}







}//FIN DE LA FUNCIÓN