/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//Nombre: Gabriel Genovese, Div H

function Rectangulo () 
{
    let base;
    let altura;
    let perimetro;
    let totalAlambre;

    
    base = document.getElementById("txtIdLargo").value;
    altura = document.getElementById("txtIdAncho").value;


    base = parseInt(base);
    altura = parseInt(altura);


    perimetro = 2 * (base + altura);

    totalAlambre = 3 * perimetro;
    
    alert("Se necesitan "+totalAlambre+" metros de alambre");

}
function Circulo () 
{
    let radio;
    let pi;
    let circunferencia;
    let totalAlambre;


    pi = Math.PI
    radio = document.getElementById("txtIdRadio").value;


    radio = parseInt(radio);


    circunferencia = 2 * pi * radio;
    
    totalAlambre = 3 * circunferencia;
    totalAlambre = totalAlambre.toFixed(2);
    
    alert("Se necesitan "+totalAlambre+" metros de alambre");
}
function Materiales () 
{
	let base;
    let altura;
    let area;
    let bolsasCemento;
    let bolsasCal;

    
    base = document.getElementById("txtIdLargo").value;
    altura = document.getElementById("txtIdAncho").value;


    base = parseInt(base);
    altura = parseInt(altura);


    area = base * altura;

    bolsasCemento = 2 * area;

    bolsasCal = 3 * area;

    alert("Se necesitan "+ bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal");
}