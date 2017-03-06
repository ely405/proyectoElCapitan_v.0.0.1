function printTemas(btn){
  var temas = document.getElementById("temas");
  var numSpr = document.getElementById("sprints");
  var pr1 = document.getElementById("primQ");
  var pr2 = document.getElementById("segQ");
  var pr3 = document.getElementById("terQ");
  //opciones de la pregunta 1 sprint 1
  var opcA1 = document.getElementById("respA1");
  var opcA2 = document.getElementById("respA2");
  var opcA3 = document.getElementById("respA3");
  //opciones de la pregunta 2 sprint 1
  var opcB1 = document.getElementById("respB1");
  var opcB2 = document.getElementById("respB2");
  var opcB3 = document.getElementById("respB3");

  var opcC1 = document.getElementById("respC1");
  var opcC2 = document.getElementById("respC2");
  var opcC3 = document.getElementById("respC3");

  var b1 = document.getElementById("btSpr1");
  var b2 = document.getElementById("btSpr2");
  var b3 = document.getElementById("btSpr3");

  if(btn == b1){
    numSpr.innerHTML = "Sprint 1: Introducción a Javascript";
    temas.innerHTML = "<li>Fundamentos de Programación</li>  <li>Funciones</li>  <li>Arreglos</li>  <li>Objetos</li>"
    pr1.innerHTML = "Existen dos tipos de funciones";
    opcA1.innerHTML = "Expresadas y declaradas";
    opcA2.innerHTML = "Explicitas y declaradas";
    opcA3.innerHTML = "Expresadas y derivadas";

    pr2.innerHTML = "Elije una propiedad de los arreglos";
    opcB1.innerHTML = "clear";
    opcB2.innerHTML = "pop";
    opcB3.innerHTML = "add";

    pr3.innerHTML = "Un objeto tiene _ _ _ _ _ _ _ _ y _ _ _ _ _ _ _ _";
    opcC1.innerHTML = "números y letras";
    opcC2.innerHTML = "partes y validaciones";
    opcC3.innerHTML = "propiedades y valores";
  }else if (btn == b3) {
    document.getElementById("sprint2").innerHTML = "<h2>Sprint 3</h2>";
  }
}
