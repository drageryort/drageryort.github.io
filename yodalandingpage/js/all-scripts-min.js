document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll(".frequentlyAskedQuestionsBlockButton"),t=document.querySelectorAll(".frequentlyAskedQuestionsBlockQuestions"),o=0;o<e.length;o++)e[o].addEventListener("click",function(){e[o]=this.classList.toggle("clicked")});for(var o=0;o<t.length;o++)t[o].addEventListener("click",function(){t[o]=this.classList.toggle("clicked")})}),$(document).on("ready",function(){$(".center").slick({centerMode:!0,centerPadding:"90px",slidesToShow:3,slidesToScroll:3,arrows:!0,prevArrow:'<button type="button" class="slick-prev">Previous</button>',nextArrow:'<button type="button" class="slick-next">Next</button>',dots:!0,variableWidth:!0,responsive:[{breakpoint:400,settings:{arrows:!0,centerMode:!0,centerPadding:"0px",slidesToShow:1}}]}),$(".centers").slick({centerMode:!0,centerPadding:"90px",slidesToShow:3,slidesToScroll:3,arrows:!0,prevArrow:'<button type="button" class="slicks-prev"></button>',nextArrow:'<button type="button" class="slicks-next"></button>',dots:!0,variableWidth:!0,responsive:[{breakpoint:400,settings:{arrows:!0,centerMode:!0,centerPadding:"0px",slidesToShow:1}}]})});