/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 

Nombre: Genovese Gabriel
*/

function mostrar()
{	
	var Nombre;
	var Apellido;
	var Edad;

	Nombre = document.getElementById('txtIdNombre').value
	//Apellido = prompt('Ingrece su apellido: ')
	Edad = document.getElementById('txtIdEdad').value

	alert('Usted se llama '+Nombre+' y tiene '+Edad)
}

