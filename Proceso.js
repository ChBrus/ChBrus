let si = document.getElementById("DijoSi:D");
let no = document.getElementById("DijoNo:(");
let R = document.getElementById("Answer:^");
let Rei = document.getElementById("Reinicio");

let Texto = "Si quieres ver lo que dice la otra opción está bien, solo reinicia la página Nathy";
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
        
        if(contador == 1)
        {
            R.textContent = "Está bien, lo entiendo, espero y te haya gustado la página...";
        }
        else if(contador == 5)
        {
            alert("Oye ya le picaste muchas veces, deje de validar datos Nathy XDXD");
        }
        contador++;
        Decision = 2;
    }
    else
    {
        R.textContent = "Poke le picaste a la opción 'No', si ya le pusiste a 'Si'? ;-;";
        Rei.textContent = Texto;
    }
}

function Respuesta()
{
    if(Decision == 0 || Decision == 1)
    {
        R.textContent = "YEIIIIIIIIIIIIIIIII kaenraknlankaw Te quiero mucho Nathita :3 Bueno, puedes envíarme tú respuesta :D";
        Decision = 1;
    }
    else
    {
        R.textContent = "Es chido que le hayas cambiado a 'Si', pero ya le habías puesto a 'No' ;-; AAAAAAAAAAA no entiendo ;-;";
        Rei.textContent = Texto;
    }
}

function aleatorio (minimo,maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}