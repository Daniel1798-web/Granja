//variables

var granja = document.getElementById("granjita");
var papel = granja.getContext("2d");
var boton = document.getElementById("boton");



var cantidad_Pollos = aleatorio(1, 5);
var cantidad_Vacas = aleatorio(2,7);
var xPosition = aleatorio(0, 420);
var yPosition = aleatorio(0, 420);
var movimiento = 5;

var teclas =
{
    UP:38,
    RIGTH:39,
    LEFT:37,
    DOWN:40
};


//Posicion De Los Animales Comunes

var polloRetornoX = [];
var polloRetornoY = [];
var vacaRetornoX = [];
var vacaRetornoY = [];




//MAPA--GRANJA

var mapa =
{

    url:"imagenes/tile.webp",
    cargaOK: false

};

mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);


function cargarMapa ()
{
    mapa.cargaOK = true;
    dibujar();
}



//Animales

var vaca =
{
    url:"imagenes/vaca.webp",
    cargaOK: false
};

vaca.animal = new Image();
vaca.animal.src = vaca.url;
vaca.animal.addEventListener("load", cargarVaca);

var pollo =
{
    url:"imagenes/pollo.webp",
    cargaOK: false
}

pollo.animal = new Image();
pollo.animal.src = pollo.url;
pollo.animal.addEventListener("load", cargarPollo);


var cerdo = 
{
    url:"imagenes/cerdo.webp",
    cargaOK: false
}

cerdo.animal = new Image();
cerdo.animal.src = cerdo.url;
cerdo.animal.addEventListener("load", cargarCerdo);

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
};

function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
};

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
};



function dibujar()
{
    console.log(dibujar)

    if (mapa.cargaOK == true)
    {
        papel.drawImage(mapa.imagen,0, 0)
    };

    if (vaca.cargaOK == true)
    {
        console.log("cantidad de vacas =  ", cantidad_Vacas)

        for(var v = 0; v < cantidad_Vacas; v++){

        var x = aleatorio(0,5);
        var y = aleatorio(0,5);
        var x = x * 80;
        var y = y * 80;
        papel.drawImage(vaca.animal, x, y);
        vacaRetornoX.push(x);
        vacaRetornoY.push(y);
    }
};

    if (pollo.cargaOK == true)
    {
        console.log("pollos = ",cantidad_Pollos)

        for(var p = 0; p < cantidad_Pollos; p++)
        {
            var x = aleatorio(0,4);
            var y = aleatorio(0,4);
            var x = x* 80;
            var y = y* 80;
        papel.drawImage(pollo.animal, x, y);
        polloRetornoX.push(x);
        polloRetornoY.push(y);
    }
 };

    if (cerdo.cargaOK == true)
    {
        papel.drawImage(cerdo.animal, xPosition, yPosition);
    };
};






//movimiento
document.addEventListener("keydown", moverCerdo);

function moverCerdo(evento)
{
    console.log("funcion moverCerdo")
    switch(evento.keyCode)
{
    case teclas.RIGTH:
    moverPig(xPosition , yPosition);
    xPosition = xPosition + movimiento;
    console.log("derecha+")
    break;

    case teclas.LEFT:
        moverPig(xPosition , yPosition);
        xPosition = xPosition - movimiento;
        console.log(" izquierda")
        break;

    case teclas.DOWN:
        moverPig(xPosition , yPosition);
        yPosition = yPosition + movimiento;
        console.log("Bajando")
        break;

    case teclas.UP:
        moverPig(xPosition , yPosition);
        yPosition = yPosition - movimiento;
        console.log("Arriba")
        break;

}}

    

function moverPig (xPosition, yPosition)
{
    

    if (mapa.cargaOK)
    {
    papel.drawImage(mapa.imagen, 0, 0)
    }

    if(vaca.cargaOK, pollo.cargaOK, cerdo.cargaOK)
    {
        papel.drawImage(cerdo.animal, xPosition + movimiento, yPosition + movimiento)
        dibujarRetornos();
    }
  

};

function dibujarRetornos()
{
    for(var p = 0; p <= cantidad_Pollos; p++)
    {
        papel.drawImage(pollo.animal, polloRetornoX[p], polloRetornoY[p])
    }

    for( var v = 0; v <= cantidad_Vacas; v++)
    {
        papel.drawImage(vaca.animal, vacaRetornoX[v], vacaRetornoY[v])
    }

};



//Funcion aleatorio



function aleatorio (maxi,min)
{
    var resultado;
    resultado = Math.floor(Math.random()*(maxi - min + 1))+ min;
    return resultado;
};

boton.addEventListener("click", dibujar);

/*function dibujar2()
{console.log(dibujar)
    if (mapa.cargaOK == true){
        papel.drawImage(mapa.imagen,0, 0)
    }
    if (vaca.cargaOK == true){ 
        papel.drawImage(vaca.animal, z,c);}
    if (pollo.cargaOK == true){
        papel.drawImage(pollo.animal, z,d);
    }
    if (cerdo.cargaOK == true){
        papel.drawImage(cerdo.animal, c,d);
    }
    removeEventListener("click",dibujar)*/

