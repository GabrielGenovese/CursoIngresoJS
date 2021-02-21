/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	while(sexoIngresado != "f" && sexoIngresado != "m" )
	{
		sexoIngresado = prompt("ingrese f ó m .");
		
		sexoIngresado = sexoIngresado.toLowerCase()

	}
	
	if (sexoIngresado == "f")
	{
		sexoIngresado = "femenino";
	}
	else
	{
		sexoIngresado = "masculino";
	}



	txtIdSexo.value = sexoIngresado;
}//FIN DE LA FUNCIÓN