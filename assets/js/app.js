function Capitan(){
  this.countChecked = 0;
  this.recordText = [];
  //this.options = document.getElementsByName(name);

  this.printTemas = function(numSprint){
      var sprint1 = document.getElementById("divSprint1");
      var sprint2 = document.getElementById("divSprint2");
      var sprint3 = document.getElementById("divSprint3");

      if(numSprint == "divSprint1"){
        sprint1.style.display = "block";
        sprint2.style.display = "none";
        sprint3.style.display = "none";
        alert("hola");
      }else if(numSprint == "divSprint2"){
        sprint1.style.display = "none";
        sprint2.style.display = "block";
        sprint3.style.display = "none";
        alert("hola2");
      }else if(numSprint == "divSprint3"){
        sprint1.style.display = "none";
        sprint2.style.display = "none";
        sprint3.style.display = "block";
        alert("hola3");
      }
    }

  this.quizSolution = function(name, idSpan){
    var options = document.getElementsByName(name);
    var chooseOption = document.getElementById(idSpan);
  //  var record = document.getElementById(idSpanResultado);
    var optionSelected = false;
    for(var i = 0; i <options.length; i++){
      if(options[i].checked){
        //this.countChecked++;
        optionSelected = true;
        //this.recordText.push(options[i].value);
        console.log(optionSelected);
        console.log(this.recordText);
        //record.innerHTML = this.recordText;
        chooseOption.innerHTML = "";
        break;
      }else{
        chooseOption.innerHTML = "escoge una opcion";
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
    elCapitan.quizSolution("quiz1-opcA", "spnSelectOptionQ1-A");
    elCapitan.quizSolution("quiz1-opcB", "spnSelectOptionQ1-B");
    elCapitan.quizSolution("quiz1-opcC", "spnSelectOptionQ1-C");
    elCapitan.solutionQuiz1("quiz1-opcA", 1);
    //console.log(elCapitan.options);
  });
console.log(elCapitan.options);
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
