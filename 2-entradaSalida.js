//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	var importeFinal;
  	var importeProducto;
  	
  	importeProducto = prompt("Ingrese importe");
  	importeProducto = parseInt(importeProducto);
  	
  	importeFinal = importeProducto+importeProducto*21/100;
  	importeFinal = parseInt(importeFinal);
	
	document.getElementById('importe').value = importeFinal; 

}

