function Mostrar()
{

	var hora;

	hora = prompt("Ingrese hora : ");

	switch(hora){

		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
					alert("Mañana");
					break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":  
		case "19":
		case "20":
					alert("tarde de mate");
					break;	

		case "21":
		case "22":
		case "23":
		case "24":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
				alert("Es de noche");
					
				if(hora < 6){

					alert("Voy a un var");
				}	
				break;
			

		default:
				
					alert("NOP"); 						
	}				
	

/*
	if(hora > 24 || hora < 6){

		alert("Me voy a un var");

	}
	else{
		if(hora < 11 || hora > 6){

			alert("A desayunar");

		}

	}

*/

}
