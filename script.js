//LLamo a pantallas
p1 = document.getElementById("p1");
p2 =document.getElementById("p2");
//llamo boton pantalla1
bt1= document.getElementById("bt1");
//llamo encabezado pantalla 2
e2= document.getElementById("e2");
//Añado evento para boton pantalla1
bt1.addEventListener("click", NuevoJuego);;
//llamo ventana de elegir jugadores
var vej = document.getElementById("vej");
//LLamo radios de seleccion de jugadores
var njugador=document.getElementsByClassName("njugador");
//LLamo voton seleccionar jugador2 
var btn2 = document.getElementById("btn2");
//añado evento a boton seleccionar jugador
btn2.addEventListener("click", SeleccionarJugador);
//traigo ventana con opciones de cantidad de jugadores para poder ocultarla
vejop=document.getElementById("vejop");
//Traigo La ventana con el imput Text para los nombres
ventananombres= document.getElementById("ventananombres");
//Llamo a mensaje de error nombre vacio y lo oculto
var nombrevacio = document.getElementById("nombrevacio");
nombrevacio.style.visibility="hidden";
//Traigo el titulo de la ventana de jugadores para volverla dinamica 
var tvjugadores = document.getElementById("tvjugadores");
//Traigo btn3 de preparar Anotador
var btn3= document.getElementById("btn3");
//Añado evento a btn3
btn3.addEventListener("click",PrepararAnotador);
//variables globales

var CantidadJugadores=0;// Almacena la cantidad de jugadores seleccionada
var njugador;// Array para cada uno de las opciones de jugadores (radios)
var nombresj=[] //Almacena nombres de los jugadores
var jugadoresnombrados= 0; //Almacena la cantidad de nombres ingresados
var Jugadapuntuada; // Valor de jugada invocada
var jugadorjugando //va a juardar el valor del jugador que invoca la jugada
var jugador1= 1;
var jugador2= 2;
var jugador3= 3;
var jugador4= 4;
var jugador5= 5;
var puntostotales= 0;
var acumulado;
var estadomusica;
//LLamo cada una de las columnas de jugadores

j1=document.getElementById("j1");
j2=document.getElementById("j2");
j3=document.getElementById("j3");
j4=document.getElementById("j4");
j5=document.getElementById("j5");
//Traigo cada una de los casilleros de jugadas 
var pj1= document.getElementsByClassName("pj1");
var pj2= document.getElementsByClassName("pj2");
var pj3= document.getElementsByClassName("pj3");
var pj4= document.getElementsByClassName("pj4");
var pj5= document.getElementsByClassName("pj5");
//Traigo casilleros de totales

var totalpuntos= document.getElementsByClassName("total");
//traigo la musica papa
var audio = new Audio('audio/theme.mp3');

//Variables de ventana modal
//Llamo ventana modal de puntos pantalla2
puntuar= document.getElementById("Puntuar");

var btnpuntos= document.getElementsByClassName("Btnpuntos");

//Llamo a componentes del menu de la segunda pantalla
limpiar=document.getElementById("limpiar");
musica=document.getElementById("musica");
volver=document.getElementById("volver");

limpiar.addEventListener("click",Reiniciar);
musica.addEventListener("click",PlayMusica);
volver.addEventListener("click",Abandonar);

//Funciones de menu

//reinicia todos los puntos del juego 
function Reiniciar(){
//pongo todos los valores de grilla para cada uno de los jugadores a cero
for(i=0;i<pj1.length;i++){
    pj1[i].textContent=0;
    pj2[i].textContent=0;
    pj3[i].textContent=0;
    pj4[i].textContent=0;
    pj5[i].textContent=0;
}
    //Pongo a cero todos los totales  
    for(i=0;i<totalpuntos.length;i++){
        totalpuntos[i].textContent=0;
    }

}
//Llama a ventana de abandonar juego 
function Abandonar(){

    cerrarjuego.style.visibility="visible";    

}
// Activa o desactiva musica 

function PlayMusica(){
if(estadomusica=="off"){
    audio.play();
    musica.textContent="Musica OFF"; 
    estadomusica= "on" 
}
else{
    audio.pause(); 
    musica.textContent="Dejar de ser amargo "; 
    estadomusica= "off" 
}
}

//LLamo ventana modal  de abandonar juego y sus componentes
var cerrarjuego= document.getElementById("cerrarjuego");
var cancelacerrar= document.getElementById("cancelacerrar");
var siabandonar= document.getElementById("siabandonar");
var noabandonar= document.getElementById("noabandonar");

cerrarjuego.style.visibility="hidden";

cancelacerrar.addEventListener("click",CancelaAbandonar);
noabandonar.addEventListener("click",CancelaAbandonar);
siabandonar.addEventListener("click",Salir);
//Funciones de ventana abandonar

function CancelaAbandonar(){

    cerrarjuego.style.visibility="hidden";
}

function Salir(){
    p2.style.visibility="hidden";
    p1.style.visibility="visible";
    cerrarjuego.style.visibility="hidden";
}

//Funciones de sistema

//inicia proceso de pantalla de seleccion de jugadores 
function NuevoJuego(){

    //  p1.style.visibility="hidden";
    vej.style.visibility="visible";
}
//Recorro cada uno de los objetos radios para ver cuantos jugadores fueron elegidos
function SeleccionarJugador(){

for(i=0;i<5;i++){
if(njugador[i].checked){
    // Guardo en la variable Cantidad de jugadores el valor seleccionado
    CantidadJugadores=njugador[i].value
    //Invoco a la funcion Pedir nombres para preparar la interfaz Grafica
    PedirNombres();
}
}

}

function PedirNombres(){
    // Oculto la ventana con radios de cantidad de jugadores 
    vejop.style.visibility="hidden";
    //Visibiliso input para ingreso de nombres
    ventananombres.style.visibility="visible";
    //Oculto boton de cantidad de jugadores 
    btn2.style.visibility="hidden";
    //Cambio Mensaje de la barra de Titulos
    tvjugadores.textContent="Ingrese el nombre del Jugador 1";

}


function PrepararAnotador(){
    var mensaje //contador que define mensaje del jugador a guardar
    var cajatexto = document.getElementById("inputnombres");// obtengo elemento text
    if(cajatexto.value==""){

        nombrevacio.style.visibility="visible";
    }
    else{
    jugadoresnombrados++
    nombresj[jugadoresnombrados]= cajatexto.value;
    mensaje= jugadoresnombrados +1;
    if(jugadoresnombrados == CantidadJugadores){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        vej.style.visibility="hidden";
        ventananombres.style.visibility="hidden";
        ActivarJugadores();
        Musica();
        nombrevacio.style.visibility="hidden";
    }
    else{
    tvjugadores.textContent="Ingrese el nombre del jugador  " +mensaje;
    cajatexto.value="";
        
    }
}
}


//Funcion que prepara planilla segun nombres y cantidad de jugadores

function ActivarJugadores(){
    //Variable que almacena h3 donde apareceran los nombres en pantalla2
    var n=document.getElementsByClassName("n");
    //condicional que regula columnas de jugadores segun la cantidad elegida
switch(CantidadJugadores){

    case "1":
            j2.style.visibility="hidden";
            j3.style.visibility="hidden";
            j4.style.visibility="hidden";
            j5.style.visibility="hidden";
            n[0].textContent=nombresj[1];
            break;
    case "2":
                    j3.style.visibility="hidden";
                    j4.style.visibility="hidden";
                    j5.style.visibility="hidden";
                    n[0].textContent=nombresj[1];
                    n[1].textContent=nombresj[2]; 
                    break;

    case "3":

            j4.style.visibility="hidden";
            j5.style.visibility="hidden";
            n[0].textContent=nombresj[1];
            n[1].textContent=nombresj[2];
            n[2].textContent=nombresj[3];
            
            break;
    case "4":
            j5.style.visibility="hidden";
            n[0].textContent=nombresj[1];
            n[1].textContent=nombresj[2];
            n[2].textContent=nombresj[3];
            n[3].textContent=nombresj[4];
            break;

    case "5":
            n[0].textContent=nombresj[1];
            n[1].textContent=nombresj[2];
            n[2].textContent=nombresj[3];
            n[3].textContent=nombresj[4];
            n[4].textContent=nombresj[5];
            break;

    default:

}

}


function Anotar(invocador,player){
var cerrar= document.getElementById("CerrarPuntos");
cerrar.addEventListener("click",CerrarPuntos);
  if(invocador>5){
    for(i=6;i<8;i++){

        btnpuntos[i].style.visibility="visible";
    }
    
    }
    else{
        for(i=0;i<6;i++){

            btnpuntos[i].style.visibility="visible";
        }
        
}
    //Esta funcion se encarga de recolectar la jugada que se va a puntuar mediante su argumento invocador
    var invocador;
    var player;
    //Guarda la jugada que se va a jugar en una variable global que levantara luego el boton de puntos a asignar. 
    Jugadapuntuada= invocador;
    jugadorjugando=player;
    // Visibilisa ventana de puntuacion
   puntuar.style.visibility="visible";
   
} 

function CerrarPuntos(){
    
    puntuar.style.visibility="hidden";
    for(i=0;i<btnpuntos.length;i++){

        btnpuntos[i].style.visibility="hidden";
    }
 
}

function AnotarPunto(puntos){
    //Funcion que recibe el boton de puntos que se toco
    var puntos;// Es el value de cada boton menos de los funciones especiales
    var acumulado; //Es la variable que almacena la suma acumulada para todos
     //Declaro variables para cada tipo de jugada especial con sus puntos
     var eservido= 25;
     var enoservido = 30;
     var fservido= 35;
     var fnoservido =30;
     var pservido = 45;
     var pnoservido= 40;
     var gservido = 55;
     var gnoservido = 50;
     var dgservido=65;
     var dgnoservido=60;
    // Asigna el value del boton tocado al invocador de la jugada puntuada
    switch(jugadorjugando){
            
        case 1:  
            //primero verifico si es una  jugada especial
            if(Jugadapuntuada>5){
                       //Primero me fijo que jugada especial es segun su value 
    switch(Jugadapuntuada){

        case 6:// si es escalera
            //compruebo si el valor de puntos es servido (40) o no servido (41)
            if(puntos==40){// si es servido 
                pj1[Jugadapuntuada].textContent=eservido;
            }
            else{
                if(puntos==41){// no es servido 
                pj1[Jugadapuntuada].textContent=enoservido;  
                }
            }
            case 7://si es full
                    //compruebo si el valor de puntos es servido (40) o no servido (41)
                    if(puntos==40){// si es servido (40)
                        pj1[Jugadapuntuada].textContent=fservido;
                    }
                    else{
                        if(puntos==41)// no es servido
                        pj1[Jugadapuntuada].textContent=fnoservido;  

                    }
            case 8://si es Poker
                    //compruebo si el valor de puntos es servido (40) o no servido (41)
                    if(puntos==40){// si es servido (40)
                        pj1[Jugadapuntuada].textContent=pservido;
                    }
                    else{
                        if(puntos=41)// no es servido
                        pj1[Jugadapuntuada].textContent=pnoservido;  

                    }
            case 9://si es generala
                    //compruebo si el valor de puntos es servido (40) o no servido (41)
                    if(puntos==40){// si es servido (40)
                        pj1[Jugadapuntuada].textContent=gservido;
                    }
                    else{
                        if(puntos==41)// no es servido
                        pj1[Jugadapuntuada].textContent=gnoservido;  

                    }
                    case 10://si es full
                    //compruebo si el valor de puntos es servido (40) o no servido (41)
                    if(puntos==40){// si es servido (40)
                        pj1[Jugadapuntuada].textContent=dgservido;
                    }
                    else{
                        if(puntos==41)// no es servido
                        pj1[Jugadapuntuada].textContent=dgnoservido;  

                    }
            
    }
            }
            else{
            pj1[Jugadapuntuada].textContent=puntos;
             }
            for( i=0;i < pj1.length; i++){
               puntostotales+= parseInt(pj1[i].textContent);
                }
            totalpuntos[0].textContent= puntostotales;
            puntostotales=0;
            
        break;

        case 2: 
        //primero verifico si es una  jugada especial
        if(Jugadapuntuada>5){
            //Primero me fijo que jugada especial es segun su value 
switch(Jugadapuntuada){

case 6:// si es escalera
 //compruebo si el valor de puntos es servido (40) o no servido (41)
 if(puntos==40){// si es servido 
     pj2[Jugadapuntuada].textContent=eservido;
 }
 else{
     if(puntos==41){// no es servido 
     pj2[Jugadapuntuada].textContent=enoservido;  
     }
 }
 case 7://si es full
         //compruebo si el valor de puntos es servido (40) o no servido (41)
         if(puntos==40){// si es servido (40)
             pj2[Jugadapuntuada].textContent=fservido;
         }
         else{
             if(puntos==41)// no es servido
             pj2[Jugadapuntuada].textContent=fnoservido;  

         }
 case 8://si es Poker
         //compruebo si el valor de puntos es servido (40) o no servido (41)
         if(puntos==40){// si es servido (40)
             pj2[Jugadapuntuada].textContent=pservido;
         }
         else{
             if(puntos=41)// no es servido
             pj2[Jugadapuntuada].textContent=pnoservido;  

         }
 case 9://si es generala
         //compruebo si el valor de puntos es servido (40) o no servido (41)
         if(puntos==40){// si es servido (40)
             pj2[Jugadapuntuada].textContent=gservido;
         }
         else{
             if(puntos==41)// no es servido
             pj2[Jugadapuntuada].textContent=gnoservido;  

         }
         case 10://si es full
         //compruebo si el valor de puntos es servido (40) o no servido (41)
         if(puntos==40){// si es servido (40)
             pj2[Jugadapuntuada].textContent=dgservido;
         }
         else{
             if(puntos==41)// no es servido
             pj2[Jugadapuntuada].textContent=dgnoservido;  

         }
 
}
 }
 else{ 
            pj2[Jugadapuntuada].textContent=puntos;}
                 for( i=0;i < pj2.length; i++){
                    puntostotales+= parseInt(pj2[i].textContent);
                    }
                totalpuntos[1].textContent= puntostotales;
                puntostotales=0;
        break;

        case 3: 
                    //primero verifico si es una  jugada especial
            if(Jugadapuntuada>5){
                //Primero me fijo que jugada especial es segun su value 
switch(Jugadapuntuada){

 case 6:// si es escalera
     //compruebo si el valor de puntos es servido (40) o no servido (41)
     if(puntos==40){// si es servido 
         pj3[Jugadapuntuada].textContent=eservido;
     }
     else{
         if(puntos==41){// no es servido 
         pj3[Jugadapuntuada].textContent=enoservido;  
         }
     }
     case 7://si es full
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj3[Jugadapuntuada].textContent=fservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj3[Jugadapuntuada].textContent=fnoservido;  

             }
     case 8://si es Poker
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj3[Jugadapuntuada].textContent=pservido;
             }
             else{
                 if(puntos=41)// no es servido
                 pj3[Jugadapuntuada].textContent=pnoservido;  

             }
     case 9://si es generala
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj3[Jugadapuntuada].textContent=gservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj3[Jugadapuntuada].textContent=gnoservido;  

             }
             case 10://si es full
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj3[Jugadapuntuada].textContent=dgservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj3[Jugadapuntuada].textContent=dgnoservido;  

             }
     
}
     }
     else{
             pj3[Jugadapuntuada].textContent=puntos;}
             for( i=0;i < pj3.length; i++){
                puntostotales+= parseInt(pj3[i].textContent);
                }
            totalpuntos[2].textContent= puntostotales;
            puntostotales=0;
        break;

        case 4:  
                //primero verifico si es una  jugada especial
            if(Jugadapuntuada>5){
                //Primero me fijo que jugada especial es segun su value 
switch(Jugadapuntuada){

 case 6:// si es escalera
     //compruebo si el valor de puntos es servido (40) o no servido (41)
     if(puntos==40){// si es servido 
         pj4[Jugadapuntuada].textContent=eservido;
     }
     else{
         if(puntos==41){// no es servido 
         pj4[Jugadapuntuada].textContent=enoservido;  
         }
     }
     case 7://si es full
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj4[Jugadapuntuada].textContent=fservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj4[Jugadapuntuada].textContent=fnoservido;  

             }
     case 8://si es Poker
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj4[Jugadapuntuada].textContent=pservido;
             }
             else{
                 if(puntos=41)// no es servido
                 pj4[Jugadapuntuada].textContent=pnoservido;  

             }
     case 9://si es generala
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj4[Jugadapuntuada].textContent=gservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj4[Jugadapuntuada].textContent=gnoservido;  

             }
             case 10://si es full
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj4[Jugadapuntuada].textContent=dgservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj4[Jugadapuntuada].textContent=dgnoservido;  

             }
     
}
     }
     else{
            pj4[Jugadapuntuada].textContent=puntos;}
            for( i=0;i < pj4.length; i++){
                puntostotales+= parseInt(pj4[i].textContent);
                }
            totalpuntos[3].textContent= puntostotales;
            puntostotales=0;
        break;

        case 5:
            //primero verifico si es una  jugada especial
            if(Jugadapuntuada>5){
                //Primero me fijo que jugada especial es segun su value 
switch(Jugadapuntuada){

 case 6:// si es escalera
     //compruebo si el valor de puntos es servido (40) o no servido (41)
     if(puntos==40){// si es servido 
         pj5[Jugadapuntuada].textContent=eservido;
     }
     else{
         if(puntos==41){// no es servido 
         pj5[Jugadapuntuada].textContent=enoservido;  
         }
     }
     case 7://si es full
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj5[Jugadapuntuada].textContent=fservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj5[Jugadapuntuada].textContent=fnoservido;  

             }
     case 8://si es Poker
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj5[Jugadapuntuada].textContent=pservido;
             }
             else{
                 if(puntos=41)// no es servido
                 pj5[Jugadapuntuada].textContent=pnoservido;  

             }
     case 9://si es generala
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj5[Jugadapuntuada].textContent=gservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj5[Jugadapuntuada].textContent=gnoservido;  

             }
             case 10://si es full
             //compruebo si el valor de puntos es servido (40) o no servido (41)
             if(puntos==40){// si es servido (40)
                 pj5[Jugadapuntuada].textContent=dgservido;
             }
             else{
                 if(puntos==41)// no es servido
                 pj5[Jugadapuntuada].textContent=dgnoservido;  

             }
     
}
     }
     else{
            pj5[Jugadapuntuada].textContent=puntos;}
            for( i=0;i < pj5.length; i++){
                puntostotales+= parseInt(pj5[i].textContent);
                }
            totalpuntos[4].textContent= puntostotales;
            puntostotales=0;
        break;

          

    }

}

//Esta funcion se encarga de asignar puntos para jugadas especiales
//Es llamada por AnotarPuntos(), cuando detecta que un jugador intenta anotar Jugada nonumerica


function Musica(){
    audio.play();
    estadomusica="on";
}