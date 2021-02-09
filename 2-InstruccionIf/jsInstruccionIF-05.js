//Nombre: Genovese Gabriel
//Ejercicio 5

function mostrar()
{
	let edad;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 13 || edad > 17)
	{
		alert("No es un adolecente");
	}


}//FIN DE LA FUNCIÓN