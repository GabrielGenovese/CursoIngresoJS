//Nombre: Genovese Gabriel
//Ejercicio 6

function mostrar()
{
	let edad;
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);


	if (edad > 17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if (edad > 12 && edad <18)
		{
			alert("Es un adolecente");
		}
		else
		{
			alert("Es un niño");
		}
	}
	



}//FIN DE LA FUNCIÓN