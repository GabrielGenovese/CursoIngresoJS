/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//Nombre: Genovese Gabriel, Div H

function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;


    precio1 = document.getElementById('txtIdPrecioUno').value;
    precio2 = document.getElementById('txtIdPrecioDos').value;
    precio3 = document.getElementById('txtIdPrecioTres').value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);


    suma = precio1 + precio2 + precio3;

    alert("El precio sumado es: "+suma);
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;


    precio1 = document.getElementById('txtIdPrecioUno').value;
    precio2 = document.getElementById('txtIdPrecioDos').value;
    precio3 = document.getElementById('txtIdPrecioTres').value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    promedio = (precio1 + precio2 + precio3) / 3;

    alert("El promedio de los precios es: "+promedio);

}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let precioInicial;
    let aumentoIVA;
    let precioFinal;


    precio1 = document.getElementById('txtIdPrecioUno').value;
    precio2 = document.getElementById('txtIdPrecioDos').value;
    precio3 = document.getElementById('txtIdPrecioTres').value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);


    precioInicial = precio1 + precio2 + precio3;

    aumentoIVA = precioInicial *21 / 100;

    precioFinal = cuenta + aumentoIVA;

    alert("El precio final es: "+precioFinal);
}