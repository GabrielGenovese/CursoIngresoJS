/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 //Nombre: Gabriel Genovese, Div H
 // TP 4

function CalcularPrecio () 
{
    let cantidadLamparas;
    let precioInicial;
    let marca;
    let descuento;
    let precioConDescuento;
    let IIBB;


    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;


    cantidadLamparas = parseInt(cantidadLamparas);

    precioInicial = cantidadLamparas * 35;


    if (cantidadLamparas > 5)
    {
        descuento = precioInicial * 0.5;
    }
    else
    {
        if (cantidadLamparas == 5 )
        {
            if (marca == "ArgentinaLuz")
            {
                descuento = precioInicial * 0.4;
            }
            else
            {
                descuento = precioInicial * 0.3;
            }
        }
        else 
        {
            if(cantidadLamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = precioInicial * 0.25;
                }
                else
                {
                    descuento = precioInicial * 0.2;
                }
            }
            else
            {
                if (cantidadLamparas == 3)
                {
                    if (marca == "ArgentinaLuz")
                    {
                        descuento = precioInicial * 0.15;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            descuento = precioInicial * 0.1;
                        }
                        else
                        {
                            descuento = precioInicial * 0.5;
                        }
                    }
                }
            }
        }
    }

    precioConDescuento = precioInicial - descuento;

    if (precioConDescuento > 120)
    {
        IIBB = precioConDescuento * 0.1;
        precioConDescuento += IIBB;
        alert("Usted pago "+ IIBB +" de IIBB");
    }
    
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    
}

    //Todo lo que esta en comentario en los if es inecesario, 
    //ya que solo hace falta dejar la variable q cambia. 
    //Ej: en "descuento" solo cambia el numero a multiplicar
    