document.addEventListener("DOMContentLoaded", function(event) {
	var productsCount = document.getElementById("products-count");
	var addToCartButtons = document.querySelectorAll(".add_to_cart")
	for( var i = 0; i < addToCartButtons.length; i++){
		addToCartButtons[i].addEventListener("click",function () {
			var prevProductsCount =+ productsCount.textContent;	
			productsCount.textContent = prevProductsCount + 1;	
		})
	}
	var hamburgerMenuButton = document.getElementById("hamburger_menu_button");
	var hamburgerMenu = document.getElementsByClassName("navigation");
	var subMenu = document.getElementById("sub_menu");
	var subMenuContent = document.getElementsByClassName("list");
	var arrow = document.getElementsByClassName("arrow_in_header")
	hamburgerMenuButton.onclick = function(){
		hamburgerMenu[1] = hamburgerMenu[1].classList.toggle("clicked");
		subMenuContent[1] = subMenuContent[1].classList.remove("clicked");
		arrow[1]=arrow[1].classList.remove("clicked")
	}
	subMenu.onclick = function(){
		subMenuContent[1] = subMenuContent[1].classList.toggle("clicked");
		arrow[1] = arrow[1].classList.toggle("clicked")
	}
	var likes = document.querySelectorAll(".like_button")	
	for( var i = 0; i < likes.length; i++){
			likes[i].addEventListener("click",function () {
				if (this.className === "like_button") {
					likes[i] = this.classList.add("clicked")
				}
				else{
					likes[i] = this.classList.remove("clicked")
				}
			})
		}

	$('.slider').slick({
  		dots: true});
});