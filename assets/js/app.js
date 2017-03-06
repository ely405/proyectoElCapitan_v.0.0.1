function printTemas(divtexte) {

  var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}

  if(divtexte == sprint1){
    document.getElementById("sprint2").style.display = "none";
    //document.getElementById("sprint3").style.display = "none";
  }
  }
