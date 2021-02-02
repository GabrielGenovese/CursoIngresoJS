/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;


	nombre = prompt('Ingrese su nombre');

	//txtIdNombre.value = nombre; 			Al hacerce de esta forma puede que no funcione en todos los navegadores

	document.getElementById('txtIdNombre').value = nombre;

}

