var iconSlides = document.getElementsByClassName("boyIcon");

document.addEventListener("DOMContentLoaded",function(event){


	var leftButton = document.getElementById("leftButton");
	leftButton.onclick = function(){
		leftSlider();
	}

	function leftSlider(){
		for (i = 0; i < iconSlides.length; i++){
			if (iconSlides[i].className == "boyIcon iconFirstPosition"){
				iconSlides[i].className = "boyIcon iconFifthPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconSecondPosition"){
					 iconSlides[i].className = "boyIcon iconFirstPosition";
			} 
			else if (iconSlides[i].className == "boyIcon iconThirdPosition"){
					 iconSlides[i].className = "boyIcon iconSecondPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconFourthPosition"){
					 iconSlides[i].className = "boyIcon iconSixthPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconFifthPosition"){
					 iconSlides[i].className = "boyIcon iconSixthPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconSixthPosition"){
					 iconSlides[i].className = "boyIcon iconSecondPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconSeventhPosition"){
					 iconSlides[i].className = "boyIcon iconFifthPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconEigthPosition"){
					 iconSlides[i].className = "boyIcon iconSixthPosition";
			}
		}
	}


	var rightButton = document.getElementById("rightButton");
	rightButton.onclick = function(){
		rightSlider();
	}

	function rightSlider(){
		for (i = 0; i < iconSlides.length; i++){
			if (iconSlides[i].className == "boyIcon iconFirstPosition"){
				iconSlides[i].className = "boyIcon iconSecondPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconSecondPosition"){
					 iconSlides[i].className = "boyIcon iconThirdPosition";
			} 
			else if (iconSlides[i].className == "boyIcon iconThirdPosition"){
					 iconSlides[i].className = "boyIcon iconEigthPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconFourthPosition"){
					 iconSlides[i].className = "boyIcon iconSeventhPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconFifthPosition"){
					 iconSlides[i].className = "boyIcon iconSeventhPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconSixthPosition"){
					 iconSlides[i].className = "boyIcon iconEigthPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconSeventhPosition"){
					 iconSlides[i].className = "boyIcon iconSecondPosition";
			}
			else if (iconSlides[i].className == "boyIcon iconEigthPosition"){
					 iconSlides[i].className = "boyIcon iconSeventhPosition";
			}
		}
	}


});

