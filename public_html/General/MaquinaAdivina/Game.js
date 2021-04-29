class Game { //Crear funcion punto medio y quitar minimo etc..
    medio = this.minimo + (this.maximo-this.minimo)/2
    constructor(turno,minimo,maximo,dificultad,i){
        this.turno = turno;
        this.minimo = minimo;
        this.maximo = maximo;        
        this.dificultad = dificultad;
        this.i = i;
    }
    prueba(){
    var text = document.createElement("p");
    var textNode = document.createTextNode(this.numeroactual);
    text.appendChild(textNode);
    document.getElementById("muestra2").appendChild(text);
    }/*
    restarTiempo() {
    setInterval(function(){ alert(X); }, 10000);
    }*/
    /*
    fecha(){
        n =  new Date().toDateString();
        document.getElementById("date").innerHTML = n;
    }*/
    
    /*tiempoJuego(amagar){
        alert("TIEMPO AGOTADO!");
        document.getElementById(amagar).disabled=true;
        }*/
     
}

class GameMaquinaAdivina extends Game {
    constructor(turno,minimo,maximo,dificultad,numeroactual, numero){
        super(turno,minimo,maximo,dificultad);
        this.numeroactual = numeroactual;
        this.numero = numero;
        this.parar2;
    }

    comenzar(){
      $("#ver").css('display','inline-block');
      //document.getElementById("ver").style.display = "inline-block";
      $("#menor").css('display','inline-block');
      //document.getElementById("menor").style.display = "inline-block";
      $("#mayor").css('display','inline-block');
      //document.getElementById("mayor").style.display = "inline-block";
      $("#correcto").css('display','inline-block');
      //document.getElementById("correcto").style.display = "inline-block";
      $("#empezar").css('visibility','hidden');
      //document.getElementById("empezar").style.visibility = "hidden";
      $("#form2").css('visibility','hidden');
      document.getElementById("form2").style.visibility = "hidden";
        if(document.getElementById("facil").checked){
            this.maximo = 10;
            utiles.contador = 1;
            this.parar2 = setTimeout(this.tiempoJuego, 50000,"caja1");
            utiles.parar = setInterval('utiles.restar()',1000);
        }else if(document.getElementById("medio").checked){
            this.maximo = 50;
            utiles.contador = 20;
            this.parar2 = setTimeout(this.tiempoJuego, 200000,"caja1");
            utiles.parar = setInterval('utiles.restar()',1000);
        }else if(document.getElementById("dificil").checked){
            this.maximo = 100;
            utiles.contador = 20;
            this.parar2 = setTimeout(this.tiempoJuego, 300000,"caja1");
            utiles.parar = setInterval('utiles.restar()',1000);
        }
      
    }

    ver(){
        this.numero = (this.maximo - this.minimo) / 2;
        this.numeroactual = parseInt(this.numero);
        if(this.numero + 1 == this.maximo && this.numero - 1 == this.minimo){
        $("#mensaje").text("He adivinado en " + this.turno + " turnos, tu numero es: " + this.numeroactual);    
        //document.getElementById("mensaje").innerHTML = "He adivinado en " + this.turno + " turnos, tu numero es: " + this.numeroactual;
        } else {
        $("#mensaje").text("Es " + this.numeroactual + "?");
        //document.getElementById("mensaje").innerHTML="Es " + this.numeroactual + "?";
        this.turno++;
        prueba.prueba();
        }
    }

    grande(){
        this.minimo = this.numero;
        //this.numero = this.minimo + (this.maximo-this.minimo)/2;
        this.numero = this.medio;
        parseInt(this.numero);
        prueba.ver();
    }

    pequeño(){//Revisar
        if(this.maximo==this.minimo){
            $("#mensaje").text("ERROR");
            //document.getElementById("mensaje").innerHTML="ERROR"
        }else{
            this.maximo = this.numero;
            //this.numero = this.minimo + (this.maximo-this.minimo)/2;
            this.numero = this.medio;
            parseInt(this.numero);
            this.maximo = parseInt(this.maximo);
            this.minimo = parseInt(this.minimo);
            prueba.ver();
         }
    }
        
    correcto(){
        $("#mensaje").text("He acertado en " + this.turno + " turnos");
        //document.getElementById("mensaje").innerHTML = "He acertado en " + this.turno + " turnos";
        clearInterval(utiles.parar);
        clearTimeout(this.parar2);
    }
    }

const prueba = new GameMaquinaAdivina(0,0,0,'',0,0);










class GameYoAdivino extends Game {//Revisar fuera variables, solo nivel de juego.
        
    constructor(turno,minimo,maximo,dificultad,minumero,numero){
        super(turno,minimo,maximo,dificultad,minumero,numero);
        this.minumero = minumero;
        //this.numero=Math.floor((Math.random()*this.maximo)+1);
        this.numero = numero;
    }

    comenzar(){
      $("#minum").css('display','inline-block');
      //document.getElementById("minum").style.display = "inline-block";
      $("#verificar").css('display','inline-block');
      //document.getElementById("verificar").style.display = "inline-block";
      $("#empezar").css('visibility','hidden');
      //document.getElementById("empezar").style.visibility = "hidden";
      $("#form").css('visibility','hidden');
      //document.getElementById("form").style.visibility = "hidden";
        if(document.getElementById("facil").checked){
            this.maximo = 10;
            utiles.contador = 20;
            utiles.parar2 = setTimeout(this.tiempoJuego, 50000,"caja2");
            utiles.parar = setInterval('utiles.restar()',1000);
            this.numero = Math.floor((Math.random()*this.maximo)+1);
        }else if(document.getElementById("medio").checked){
            this.maximo = 50;
            utiles.contador = 20;
            utiles.parar2 = setTimeout(this.tiempoJuego, 200000,"caja2");
            utiles.parar = setInterval('utiles.restar()',1000);
            this.numero = Math.floor((Math.random()*this.maximo)+1);
        }else if(document.getElementById("dificil").checked){
            this.maximo = 100;
            utiles.contador = 20;
            utiles.parar2 = setTimeout(this.tiempoJuego, 300000,"caja2");
            utiles.parar = setInterval('utiles.restar()',1000);
            this.numero = Math.floor((Math.random()*this.maximo)+1);
        }
      
    }
    comprobar(){
    this.minumero=document.getElementById("minum").value;
    if(this.minumero <= this.minimo){
        $("#mensaje").text("EL NÚMERO NO PUEDE SER NEGATIVO");
        //document.getElementById("mensaje").innerHTML="EL NÚMERO NO PUEDE SER NEGATIVO"
    }else if (this.minumero > this.maximo){
        $("#mensaje").text("EL NÚMERO NO PUEDE SER MAYOR QUE EL MAXIMO");
        //document.getElementById("mensaje").innerHTML="EL NÚMERO NO PUEDE SER MAYOR QUE EL MAXIMO"
    }else if(this.minumero < this.numero){
        $("#mensaje").text("El número es mas grande que: " + this.minumero);
        //document.getElementById("mensaje").innerHTML="El número es mas grande que: " + this.minumero;
        this.turno+=1;
        pruebados.prueba();
    }else if(this.minumero > this.numero){
        $("#mensaje").text("El numero es mas pequeño que: " + this.minumero);
        //document.getElementById("mensaje").innerHTML="El numero es mas pequeño que: " + this.minumero;
        this.turno+=1;
        pruebados.prueba();
    }else if(this.minumero==this.numero){
        $("#mensaje").text("FELICIDADES, HAS ACERTADO!!! " + "Numero de intentos: " + this.turno);
        //document.getElementById("mensaje").innerHTML="FELICIDADES, HAS ACERTADO!!! " + "Numero de intentos: " + this.turno;
        pruebados.prueba();
        clearInterval(utiles.parar);
        clearInterval(utiles.parar2);
    }else if(this.minumero!==this.numero){
        $("#mensaje").text("NO PUEDE SER UNA LETRA O SIMBOLO");
        //document.getElementById("mensaje").innerHTML="NO PUEDE SER UNA LETRA O SIMBOLO";
    }
    }
    
        
    correcto(){
        $("#mensaje").text("He acertado en " + this.turno + " turnos");
        //document.getElementById("mensaje").innerHTML = "He acertado en " + this.turno + " turnos";
    }
    }

const pruebados = new GameYoAdivino(0,0,0,'',0,0);

class Utils{
    constructor(){
        this.x = 0;
        this.m = 0;
        this.h = 0;
        this.parar;
    }

cronometro() {
       $("#segundos").text("0" + this.h + ":" + "0" + this.m + ":" + "0" + this.x);
       //document.getElementById("segundos").innerHTML = "0"+ this.h + ":" + "0" + this.m + ":" + "0"+ this.x;
       this.x += 1;
       if(this.x >= 10){
           $('#segundos').text("0" + this.h + ":" + "0" + this.m + ":" + this.x);
            //document.getElementById("segundos").innerHTML = "0"+ this.h + ":" + "0"+ this.m + ":" + this.x;
       } else if(this.m >= 10){
           $('#segundos').text("0" + this.h + ":" + this.m + ":" + "0" + this.x);
            //document.getElementById("segundos").innerHTML = "0" + this.h + ":" + this.m + ":" + "0"+this.x;
       } else if(this.h >= 10){
           $("#segundos").text(this.h + ":" + this.m + ":" + this.x);
            //document.getElementById("segundos").innerHTML = this.h + ":" + this.m + ":" + this.x;
       }
       if(this.x == 59){
    	this.x = 0;
        this.m += 1;
       }
       if(this.m == 59){
    	this.m = 0;
        this.h += 1;
       }
    }

restar(){
    this.contador -= 1;
    if(this.contador<=0){
        $("#tiempoRestante").text("Fin del tiempo, ha llegado a cero");
        //document.getElementById("tiempoRestante").innerHTML = "Fin del tiempo, ha llegado a cero";
        //$("#ver").css('disabled','true');
        document.getElementById("ver").disabled=true;
        //$("#mayor").css('disable','true');
        document.getElementById("mayor").disabled=true;
        //$("#menor").css('disable','true');
        document.getElementById("menor").disabled=true;
        //$("#correcto").css('disable','true');
        document.getElementById("correcto").disabled=true;
        //$("#empezar").css('disable','true');
        document.getElementById("empezar").disabled=true;
    }else{
        $("#tiempoRestante").text("Tiempo restante "+ this.contador + " segundos.");
        //document.getElementById("tiempoRestante").innerHTML = "Tiempo restante "+ this.contador + " segundos.";
    }
}
/*
acabarCuentraAtras(){
    clearInterval(temporizar);
    alert("Fin del tiempo, ha llegado a cero");
}*/

ayudaGeneral() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $("#demo").text(this.responseText);  
      //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "prueba.txt", true);
  xhttp.send();
}

ayudaYoAdivino() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $("#demo").text(this.responseText);   
      //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ayudaYoAdivino.txt", true);
  xhttp.send();
}

ayudaMaquinaAdivina() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $("#demo").text(this.responseText); 
      //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ayudaMaquinaAdivina.txt", true);
  xhttp.send();
}

}
const utiles = new Utils();


