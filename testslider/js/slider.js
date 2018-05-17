document.addEventListener("DOMContentLoaded",function(event){

	var slideNumber = 2;
	var leftButton = document.getElementById("leftButton");
	var rightButton = document.getElementById("rightButton");

	rightButton.onclick = function(m){
		var m = 1;
		showingSlide(slideNumber += m)
	}


	leftButton.onclick = function(){
		var m = 1;
		showingSlide(slideNumber -= m)
	}

	function showingSlide(m){
		var i;
		var iconSlides = document.getElementsByClassName("boyIcon");
		
		if (m > iconSlides.length) {
			slideNumber = 1;
		}

		if (m < 1) {
			slideNumber = iconSlides.length;
		}

		for (var i = 0; i < iconSlides.length; i++) {
			iconSlides[i].style.display = "block";
		}

		iconSlides[slideNumber-1].style.display = "none";
	}
});