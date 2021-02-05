/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

Alumno : Genovese Gabriel, Div H
*/
function mostrarAumento()
{
	var entradaSueldo;
	var aumento;
	var total;


	entradaSueldo = document.getElementById("txtIdSueldo").value;
	entradaSueldo = parseInt(entradaSueldo);

	
	aumento = entradaSueldo * 0.1;

	total = entradaSueldo + entradaSueldo * 0.10;


	document.getElementById("txtIdResultado").value = total;
	
}
