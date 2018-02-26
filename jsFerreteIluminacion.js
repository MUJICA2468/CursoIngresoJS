/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidad;
	var precio;
	var marca;
	var descuento;
	var precioXcantidad;


	cantidad = document.getElementById('Cantidad').value;
	
	marca = document.getElementById("Marca").value;
	
	
	precio = 35;		
	
		
	


	switch(marca){

			case "ArgentinaLuz":
			{
				if(cantidad>=6)
				{

					descuento = cantidad*precio * 50/100;			

					document.getElementById("precioDescuento").value = descuento;

				
				}
				else 
					if(cantidad==5)
					{


						descuento = cantidad*precio * 40/100;

						document.getElementById("precioDescuento").value = descuento;


					}	
					else	
						if(cantidad==4)
						{

							descuento = cantidad*precio * 25/100;

							document.getElementById("precioDescuento").value = descuento;


						}		
						else
							if(cantidad==3)
							{


							descuento = cantidad*precio * 15/100;	
							document.getElementById("precioDescuento").value = descuento;


							}
											
							if(descuento>120)
							{


								precioXcantidad = descuento+cantidad*precio * 10/100;
								precioXcantidad = parseInt(precioXcantidad);
								alert("IIBB Usted pago: "+precioXcantidad+" siendo: "+descuento+" el impuesto que se pago");
 
									
								
							}


					

				

								



			}
			break;
			
		
			case "FelipeLamparas":
			{
				if(cantidad>=6)
				{

					descuento = cantidad*precio * 50/100;			

					document.getElementById("precioDescuento").value = descuento;

				
				}
				else
					if(cantidad==4)
					{

				
						descuento = cantidad*precio * 25/100;

						document.getElementById("precioDescuento").value = descuento;

				
					}	
					else
						if(cantidad==3)
						{


							descuento = cantidad*precio * 10/100;	
							document.getElementById("precioDescuento").value = descuento;


						}		
						
						if(descuento>120)
						{



							precioXcantidad = descuento+cantidad*precio * 10/100;
							precioXcantidad = parseInt(precioXcantidad);
							alert("IIBB Usted pago: "+precioXcantidad+" siendo: "+descuento+" el impuesto que se pago");

						}	

			}
			break;
			
			case "JeLuz":
			case "HazIluminacion":
			case "Osram":
			{
				if(cantidad>=6)
				{

					descuento = cantidad*precio * 50/100;			

					document.getElementById("precioDescuento").value = descuento;

				
				}
				else
					if(cantidad==5)
					{	

						descuento = cantidad*precio * 30/100;

						
						document.getElementById("precioDescuento").value = descuento;

					}
					else
						if(cantidad==4)
						{

							descuento = cantidad*precio * 20/100;

							document.getElementById("precioDescuento").value = descuento;
					
						}
						else
							if(cantidad==3)
							{


								descuento = cantidad*precio * 5/100;
								document.getElementById("precioDescuento").value = descuento;
								
			
							}
						
							if(descuento>120)
							{


								precioXcantidad = descuento+cantidad*precio * 10/100;
								precioXcantidad = parseInt(precioXcantidad);
								alert("IIBB Usted pago: "+precioXcantidad+" siendo: "+descuento+" el impuesto que se pago");


							}	

			}			
			break;
			
			

	

	}	




}

			




















		


	

	




	





