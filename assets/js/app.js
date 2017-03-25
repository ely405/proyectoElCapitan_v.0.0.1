function Capitan(){

  this.printTemas = function(numSprint){
    var sprint1 = document.getElementById("divSprint1");
    var sprint2 = document.getElementById("divSprint2");
    var sprint3 = document.getElementById("divSprint3");

    if(numSprint == "divSprint1"){
      sprint1.style.display = "block";
      sprint2.style.display = "none";
      sprint3.style.display = "none";
      alert("sprint1");
    }else if(numSprint == "divSprint2"){
      sprint1.style.display = "none";
      sprint2.style.display = "block";
      sprint3.style.display = "none";
      alert("sprint2");
    }else if(numSprint == "divSprint3"){
      sprint1.style.display = "none";
      sprint2.style.display = "none";
      sprint3.style.display = "block";
      alert("sprint3");
    }
  }

  this.quizSolution = function(classNameInput, idQuizContainer){
    var options = document.getElementsByClassName(classNameInput);
    var countChecked = 0;
    var countCorrectOption = 0;
    //var form1 = document.forms[0];
    //var errorMessage = document.getElementsByName(classNameSpan);
    var record = document.getElementById(idQuizContainer);
    for(var i = 0; i< options.length; i++){
      if(options[i].checked){
        countChecked++;
        console.log(countChecked);
      }
    }
    if(idQuizContainer == "pregQuiz1"){
      if(countChecked == 3){
        (options[0].checked)? (countCorrectOption++):"";
        (options[4].checked)? countCorrectOption++:"";
        (options[8].checked)? countCorrectOption++:"";
        console.log(countCorrectOption);
        record.innerHTML = "Otbuviste " + countCorrectOption + " respuestas correctas.";
      }else{
        alert("Todas las preguntas som obligtorias");
      }
    }else if(idQuizContainer == "pregQuiz2"){
      if(countChecked == 3){
        alert("tres");
        (options[1].checked)? (countCorrectOption++):"";
        (options[3].checked)? countCorrectOption++:"";
        (options[7].checked)? countCorrectOption++:"";
        console.log(countCorrectOption);
        record.innerHTML = "Otbuviste " + countCorrectOption + " respuestas correctas.";
      }else{
        alert("Todas las preguntas som obligtorias");
      }
    }

  }

  this.solutionQuiz1 = function(name, iCorrect){
    var options = document.getElementsByName(name);
    if(options.checked[iCorrect]){
      this.countChecked ++
    }
  }

}

window.addEventListener("load", function(){
  var elCapitan = new Capitan();
  document.getElementById("btnSprint1").addEventListener("click", function(event){
    event.preventDefault();
    elCapitan.printTemas("divSprint1");
  });
  document.getElementById("btnSprint2").addEventListener("click", function(event){
    event.preventDefault();
    elCapitan.printTemas("divSprint2");
  });
  document.getElementById("btnSprint3").addEventListener("click", function(event){
    event.preventDefault();
    elCapitan.printTemas("divSprint3");
  });

  document.getElementById("enviaQuiz1").addEventListener("click", function(event){
    event.preventDefault();
    elCapitan.quizSolution("inpQuiz1", "pregQuiz1");
  });

  document.getElementById("enviaQuiz2").addEventListener("click", function(event){
    event.preventDefault();
    elCapitan.quizSolution("inpQuiz2", "pregQuiz2")
  });
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
