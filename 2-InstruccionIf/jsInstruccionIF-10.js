//Nombre: Genovese Gabriel
//Ejercicio 10

function mostrar()
{
	let notaExamen;
	//Genero el número RANDOM entre 1 y 10 
	notaExamen = Math.floor(Math.random() * 10);


	if (notaExamen == 10 || notaExamen == 9)
	{
		alert("EXCELENTE");
	}
	else
	{
		if (notaExamen > 3)
		{
			alert("APROBO");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN