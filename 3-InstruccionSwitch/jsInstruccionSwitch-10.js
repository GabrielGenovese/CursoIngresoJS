//Nombre: Genovese Gabriel, Div H
//ejercicio 10

function mostrar()
{
	let estacionIngresada;
	let destino;


	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			switch(destino)
			{
				default:
					alert("Se viaja");
					break;
			}
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
			break;
	}
	
}//FIN DE LA FUNCIÓN