/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperaturaIngresada;
    let temperaturaCentigrados;
    
    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;

    temperaturaIngresada = parseFloat(temperaturaIngresada);

    temperaturaCentigrados = temperaturaIngresada - 32;
    temperaturaCentigrados *= 5/9;

    alert(temperaturaIngresada + " Fahrenheit son " + temperaturaCentigrados + " centígrados");
}

function CentigradosFahrenheit () 
{
    let temperaturaCentigrados;
    let temperaturaFahrenheit;

    temperaturaCentigrados = document.getElementById("txtIdTemperatura").value;

    temperaturaCentigrados = parseFloat(temperaturaCentigrados);

    temperaturaFahrenheit = temperaturaCentigrados * 1.8;
    temperaturaFahrenheit += 32;

    alert(temperaturaCentigrados + " Centigrados son " + temperaturaFahrenheit + " Fahrenheit");
}

