function jugar(int) {
  var intentos = ["piedra", "papel", "tijera"];
  var computador;
  computador = Math.floor(Math.random() * 3);
  turnocomputador = intentos[computador];
  turnojugador = intentos[int];

  console.log(int);
  console.log(computador);

  document.getElementById("Jugador").innerHTML = intentos[int];
  document.getElementById("Computador").innerHTML = intentos[computador];

  if (turnocomputador == "papel" && turnojugador == "piedra") {
    resultado = "Computador gano , sigue intentando:)";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./rock.png'>";

    document.getElementById("iCPU").innerHTML = "<img src='./paper.png'>";
    clearInterval(temp);
  }

  if (turnocomputador == "papel" && turnojugador == "papel") {
    resultado = "Empate padrinazo, ahi para la otra";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./paper.png'>";

    document.getElementById("iCPU").innerHTML = "<img src='./paper.png'>";
    clearInterval(temp);
  }

  if (turnocomputador == "papel" && turnojugador == "tijera") {
    resultado = "Ganaste, felicidades:)";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./scissors.png'>";

    document.getElementById("iCPU").innerHTML = "<img src='./paper.png'>";
    clearInterval(temp);
  }
  if (turnocomputador == "piedra" && turnojugador == "piedra") {
    resultado = "Empate padrinazo, ahi para la otra";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./rock.png'>";

    document.getElementById("iCPU").innerHTML = "<img src='./rock.png'>";
    clearInterval(temp);
  }

  if (turnocomputador == "piedra" && turnojugador == "papel") {
    resultado = "Ganaste, felicidades:)";
    console.log(temp);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./paper.png'>";

    document.getElementById("iCPU").innerHTML = "<img src='./rock.png'>";
    clearInterval(temp);
  }

  if (turnocomputador == "piedra" && turnojugador == "tijera") {
    resultado = "Computador gano, sigue intentando:)";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./scissors.png'>";
    document.getElementById("iCPU").innerHTML = "<img src='./rock.png'>";
    clearInterval(temp);
  }

  if (turnocomputador == "tijera" && turnojugador == "piedra") {
    resultado = "Ganaste, felicidades:)";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./rock.png'>";
    document.getElementById("iCPU").innerHTML = "<img src='./scissors.png'>";
    clearInterval(temp);
  }

  if (turnocomputador == "tijera" && turnojugador == "papel") {
    resultado = "Computador gano, sigue intentando:)";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./paper.png'>";
    document.getElementById("iCPU").innerHTML = "<img src='./scissors.png'>";
    clearInterval(temp);
  }

  if (turnocomputador == "tijera" && turnojugador == "tijera") {
    resultado = "Empate padrinazo, ahi para la otra";
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("iP1").innerHTML = "<img src='./scissors.png'>";
    document.getElementById("iCPU").innerHTML = "<img src='./scissors.png'>";
    clearInterval(temp);
  }
}

var inicio = 1;
function temporizador() {
  temp = setInterval(imagenes, 75); // definimos el tiempo en el que cambian las imagenes
}
function imagenes() {
  // accedemos al id iCPU
  var imagen = document.getElementById("iCPU"); 

  if (inicio == 1) {
    imagen.innerHTML = "<img src='./scissors.png'>";
    inicio++;
  } else if (inicio == 2) {
    imagen.innerHTML = "<img src='./rock.png'>";
    /*En cada iteracion, las imagenes cambian, cuando
    la variable inicio llega a 4 esta se reinicia*/
    inicio++;
  } else if (inicio == 3) {
    imagen.innerHTML = "<img src='./paper.png'>";
    inicio++;
  } else if (inicio == 4) {
    inicio = 1;
  }
}
