/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*
	var nombreIngresado;
	nombreIngresado=document.getElementById('txtIdNombre').value;	//es compatible con la mayoria de los navegadores
																	//el document.getElemetById saca del documento html el elemento por la ID
																	//el .value saca el valor del elemento
	alert(nombreIngresado);											
	*/

	var nombreDelAlumno;
	var edadDelAlumno;

	nombreDelAlumno=document.getElementById('txtIdNombre').value;
	edadDelAlumno = prompt('Ingrece su edad: ');

	alert('Ud se llama '+nombreDelAlumno+' y tiene '+edadDelAlumno+' años');

}