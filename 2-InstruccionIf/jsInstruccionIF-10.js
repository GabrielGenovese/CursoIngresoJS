//Nombre: Genovese Gabriel
//Ejercicio 10

//Solo tomar los extremos.
/*Test
notaExamen = 9 EXCELENTE
notaExamen = 8 APROBO
notaExamen = 4 APROBO
notaExamen = 2 Vamos, la proxima se puede
*/

function mostrar()
{
	let notaExamen;

	//Genero el número RANDOM entre 1 y 10 

	notaExamen = Math.floor(Math.random() * 10);


	//Hardcodeo
	//notaExamen = 9;
	//notaExamen = 8;
	//notaExamen = 4;
	//notaExamen = 3;

	if (notaExamen == 10 || notaExamen == 9) // es mas eficiente(notaExamen > 8)
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