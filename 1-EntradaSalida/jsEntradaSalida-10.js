/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

Alumno : Genovese Gabriel, Div H
*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var total;


	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	
	descuento =  importe * 0.25;

	total = importe - descuento;

	//descuento = (importe * 25)/100;
	//total = importe - (importe * 0.25);
	//total = importe * 0.75;

	document.getElementById("txtIdResultado").value = total;
}
