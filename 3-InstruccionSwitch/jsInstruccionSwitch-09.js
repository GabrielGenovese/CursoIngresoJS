//Nombre: Genovese Gabriel, Div H
//ejercicio 9

function mostrar()
{
	var estacionIngresada;
	var destino;
	var estadia;
	var descuento;
	var aumento;
	var precioFinal;


	estacionIngresada = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	estadia = 15000;

	descuento = 0;
	aumento = 0;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					aumento = estadia * 0.20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = estadia * 0.10;
					break;
				case "Mar del plata":
					descuento = estadia * 0.20;
					break;
			}
			break;
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					descuento = estadia * 0.20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = estadia * 0.10;
					break;
				case "Mar del plata":
					aumento = estadia * 0.20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
					aumento = estadia * 0.10;
					break;
				case "Cataratas":
					aumento = estadia * 0.10;
					break;
				case "Cordoba":
					descuento = 0;
					break;
				case "Mar del plata":
					aumento = estadia * 0.10;
					break;
			}
			break;
	}

	precioFinal = estadia + aumento - descuento;


	alert("El precio final es: "+precioFinal+" pesos");

}//FIN DE LA FUNCIÓN