let si = document.getElementById("DijoSi:D");
let no = document.getElementById("DijoNo:(");
let R = document.getElementById("Answer:^");
let Rei = document.getElementById("Reinicio");

let Texto = "Que estás haciendo Nath? XDXD Si quieres ver lo que había el otro botón solo reinicia la página, sip? Y antes dime que pusiste XD porfis";
let contador = 1;
let Decision = 0;

si.addEventListener("click", Respuesta);

no.addEventListener("click", cambioDeLugar);

function cambioDeLugar()
{
    if(Decision == 0 || Decision == 2)
    {
        no.style.marginLeft = aleatorio(1, 1155) + "px";
        no.style.marginRight = aleatorio(1, 1155) + "px";
        no.style.marginTop = aleatorio(1, 250) + "px";
        no.style.marginBottom = aleatorio(1, 250) + "px";
        
        if(contador == 3)
        {
            R.textContent = " Jaja perdón por moverte el botón 3 veces, pero está bien, lo entiendo, espero y te haya gustado la página, y dime que le pusiste, sip? :^";
        }
        else if(contador%5 == 0)
        {
            alert("Oye ya le picaste muchas veces, deje de validar datos Nathy XDXD");
        }
        contador++;
        Decision = 2;
    }
    else
    {
        Rei.textContent = Texto;
    }
}

function Respuesta()
{
    if(Decision == 0 || Decision == 1)
    {
        R.textContent = "YEIIIIIIIIIIIIIIIII kaenraknlankaw Te quiero mucho Nathita :3 Bueno, ahora dile al yo de otro tiempo lo que pusiste, sip? :^";
        Decision = 1;
    }
    else
    {
        Rei.textContent = Texto;
    }
}

function aleatorio (minimo,maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}
