/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var multiplicacionNegativos;


	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';


	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número o escriba 'no' para terminar")
		numeroIngresado = parseInt(numeroIngresado);
	
		if (numeroIngresado > 0 )
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			multiplicacionNegativos *= numeroIngresado;
		}
		
		respuesta = prompt("¿Desea continuar? (si/no)");
		respuesta = respuesta.toLowerCase();
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN