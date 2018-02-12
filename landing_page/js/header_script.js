var fastSearchButton = document.getElementsByClassName("fast_search_icon_arrow");
var fastSearchMenu = document.getElementsByClassName("second_line_header");
var	fastSearchSign = document.getElementsByClassName("fast_search_sign");
var	thirdBlockMenu = document.getElementsByClassName("navigation_header")
fastSearchButton[0].onclick = function () {
	if (fastSearchMenu[0].className === "second_line_header") {
		fastSearchMenu[0] = fastSearchMenu[0].classList.add("clicked");
		fastSearchSign[0] = fastSearchSign[0].classList.add("clicked");
		thirdBlockMenu[0] = thirdBlockMenu[0].classList.add("clicked");
		fastSearchButton[0] = fastSearchButton[0].classList.add("clicked")
	} else {
		fastSearchMenu[0] = fastSearchMenu[0].classList.remove("clicked");
		fastSearchSign[0] = fastSearchSign[0].classList.remove("clicked");
		thirdBlockMenu[0] = thirdBlockMenu[0].classList.remove("clicked");
		fastSearchButton[0] = fastSearchButton[0].classList.remove("clicked")
	}
}
var	search_button = document.getElementsByClassName("search_button");
var search_block = document.getElementsByClassName("search_block");
var search_block_clicked = document.getElementsByClassName("search_form_button_background"); 
search_button[0].onclick = function () {
	search_block[0] = search_block[0].classList.add("clicked");
}
search_block_clicked[0].onclick = function() {
	search_block[0] = search_block[0].classList.remove("clicked");	
}


var	supportBlockButton = document.getElementsByClassName("path_block_graphic_for_all_points");
var supportBlock = document.getElementsByClassName("path_block_graphic_support_block");
supportBlockButton[0].onclick = function () {
		supportBlock[0] = supportBlock[0].classList.toggle("clicked");
}	
supportBlockButton[1].onclick = function () {
		supportBlock[1] = supportBlock[1].classList.toggle("clicked");
}	
supportBlockButton[2].onclick = function () {
	supportBlock[2] = supportBlock[2].classList.toggle("clicked");
}	
supportBlockButton[3].onclick = function () {
	supportBlock[3] = supportBlock[3].classList.toggle("clicked");
}
supportBlockButton[4].onclick = function () {
	supportBlock[4] = supportBlock[4].classList.toggle("clicked");
}	
supportBlockButton[5].onclick = function () {
	supportBlock[5] = supportBlock[5].classList.toggle("clicked");	
}


/*
for (var i = 0; i < supportBlockButton.length; i++) {
	supportBlockButton[i].addEventListener("click",function () {
		var trop = supportBlock[i];
		trop = this.classList.toggle("clicked");
	})
}
*/