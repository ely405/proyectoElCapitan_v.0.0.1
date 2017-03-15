document.getElementById("btnSprint1").addEventListener("click", function(event){
  event.preventDefault();
  printTemas("divSprint1");
});
document.getElementById("btnSprint2").addEventListener("click", function(event){
  event.preventDefault();
  printTemas("divSprint2");
});
document.getElementById("btnSprint3").addEventListener("click", function(event){
  event.preventDefault();
  printTemas("divSprint3");
});

function printTemas(numSprint) {
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
