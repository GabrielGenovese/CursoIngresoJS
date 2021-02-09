//Nombre: Genovese Gabriel
//Ejercicio 8

function mostrar()
{
	let edad;
	let estadoCivil;
	//tomo la edad y el estado civil
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor de edad");
	}
	


}//FIN DE LA FUNCIÓN