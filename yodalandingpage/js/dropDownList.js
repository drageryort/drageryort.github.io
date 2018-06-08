document.addEventListener("DOMContentLoaded",function(event){
	var questionButton = document.querySelectorAll(".frequentlyAskedQuestionsBlockButton");	
	var questionContent = document.querySelectorAll(".frequentlyAskedQuestionsBlockQuestions");
	for( var i = 0; i < questionButton.length; i++){
			questionButton[i].addEventListener("click",function () {
					questionButton[i] = this.classList.toggle("clicked")
			})
		}
	for( var i = 0; i < questionContent.length; i++){
			questionContent[i].addEventListener("click",function () {
					questionContent[i] = this.classList.toggle("clicked")
			})
		}	
});