alert("lista estudiante");
function Student(nombre, apellido, promocion, estado){
  this.nombre = nombre;
  this.apellido = apellido;
  this.promocion = promocion;
  this.estado = estado;
}


console.log(Student);
var arrayStudents = [
                      new Student("Meche", "Zubieta", "1era promoción", "Trabajando"),
                      new Student("Arabela", "Rojas", "2da promoción", "Trabajando"),
                      new Student("María", "Rosá", "2da promoción", "Trabajando"),
                      new Student("Sara", "casa", "3ra promoción", "Trabajando"),
                      new Student("Daniella", "Duran", "4ta promoción", "Trabajando"),
                      new Student("Michelle", "Seguil", "5ta promoción", "Trabajando")
                    ];
console.log(arrayStudents);

function createDiv(){
  var containerStudentsData = document.getElementById("sctnPrintStudentDataList");

  arrayStudents.forEach(function(elem){
    var containerStudent = document.createElement("DIV");
    containerStudent.classList.add("studentDiv");
    for(var prop in elem){
      var paragraph = document.createElement("P");
      var paragraphContent = document.createTextNode(prop +": " + elem[prop]);
      paragraph.appendChild(paragraphContent);
      containerStudent.appendChild(paragraph);
    }
    containerStudentsData.appendChild(containerStudent);
  })
}

window.addEventListener("load", createDiv);
