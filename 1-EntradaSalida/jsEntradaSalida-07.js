/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"

Alumno = Genovese Gabriel Div H
*/ 

function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;


	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;


	alert("La suma es: "+suma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;


	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;


	alert("La resta es: "+resta);	
}

function multiplicar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;


	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicacion = numeroUno * numeroDos;

	alert("La multiplicacion es: "+multiplicacion);	

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;

	
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	division = numeroUno / numeroDos;


	alert("La division es: "+division);	
}

