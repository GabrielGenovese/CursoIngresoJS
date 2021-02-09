//Nombre: Genovese Gabriel
//Ejercicio 7

function mostrar()
{
	let edad;
	let estadoCivil;

	//tomo la edad y el estado civil
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);


	if (edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN