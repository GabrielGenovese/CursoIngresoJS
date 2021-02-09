//Nombre: Genovese Gabriel
//Ejercicio 9

function mostrar()
{
	let numeroRandom;

	//Genero el número RANDOM entre 1 y 10 
	numeroRandom = Math.random() * (11-1)+1; //tambien puede ser "* 10)+1" (del 1 al 10)

	numeroRandom = Math.floor(numeroRandom);

	alert("El numero random es: "+numeroRandom);	

}//FIN DE LA FUNCIÓN

//Math.random() Retorna un número aleatorio entre 0 (incluido) y 1 (excluido)
//Math.random() * (max - min) + max Retorna un número aleatorio entre min (incluido) y max (excluido)