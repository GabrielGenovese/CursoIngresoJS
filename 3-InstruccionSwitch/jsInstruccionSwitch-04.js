//Nombre: Genovese Gabriel, Div H
//ejercicio 4

function mostrar()
{
	//tomo el mes
	var mesDelAño;


	mesDelAño = document.getElementById("txtIdMes").value;


	switch(mesDelAño)
	{
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias");
			break;
		default:
			alert("Tiene 30 dias");
			break;

	}
}//FIN DE LA FUNCIÓN