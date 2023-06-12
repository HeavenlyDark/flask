var grupoActual = 1;

// Función para calcular los resultados y actualizar los casilleros en el grupo 1
function calcularCasillerosGrupo1() {
  var numero1 = parseInt(document.getElementById("casillero1").value);
  var numero2 = parseInt(document.getElementById("casillero2").value);
  var numero3 = parseInt(document.getElementById("casillero3").value);
  
  var resultado4 = numero1 / 8;
  var resultado6 = numero3 / 8;

  document.getElementById("casillero4").value = resultado4;
  document.getElementById("casillero6").value = resultado6;
}

// Función para calcular los resultados y actualizar los casilleros en el grupo 2
function calcularCasillerosGrupo2() {
  var numero4 = parseInt(document.getElementById("casillero4").value);
  var numero5 = parseInt(document.getElementById("casillero5").value);
  var numero6 = parseInt(document.getElementById("casillero6").value);
  
  var resultado1 = numero4 * 8;
  var resultado3 = numero6 * 8;

  document.getElementById("casillero1").value = resultado1;
  document.getElementById("casillero3").value = resultado3;
}

// Función para cambiar al grupo 1
function cambiarGrupo1() {
  grupoActual = 1;
  document.getElementById("grupo1").style.display = "block";
  document.getElementById("grupo2").style.display = "none";
}

// Función para cambiar al grupo 2
function cambiarGrupo2() {
  grupoActual = 2;
  document.getElementById("grupo1").style.display = "none";
  document.getElementById("grupo2").style.display = "block";
}