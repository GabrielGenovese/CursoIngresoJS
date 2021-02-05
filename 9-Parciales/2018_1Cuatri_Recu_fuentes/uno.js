
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;


    ancho = prompt("Ingrese el ancho del rectangulo");
    largo = prompt("Ingrese el largo del rectangulo");

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    perimetro = 2 * (ancho + largo);

    alert("El perimetro del rectangulo es igual a "+perimetro);
}
