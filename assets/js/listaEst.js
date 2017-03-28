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
var containerStudentsData = document.getElementById("sctnPrintStudentDataList");
//window.addEvenListener("load", function(){
  arrayStudents.forEach(function(e){
    console.log(e);
    var text =[];
    var paragraph;
    for (var prop in e) {
      text.push(prop + " " + e[prop]);
      console.log(text);
      text.forEach(function(elem){
        paragraph = document.createElement("P");
        var paragraphContent = document.createTextNode(elem);
        console.log(elem);
        console.log(paragraphContent);
        paragraph.appendChild(paragraphContent);
      });
    }
    var div = document.createElement("DIV")
    div.appendChild(paragraph);
    containerStudentsData.appendChild(div);
  });
// });
