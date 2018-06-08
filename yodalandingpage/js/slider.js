$(document).on('ready', function() {
	$('.center').slick({
  		centerMode: true,
  		centerPadding: '90px',
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		arrows: true,
  		prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  		nextArrow: '<button type="button" class="slick-next">Next</button>',
  		dots: true,
  		variableWidth:true,
  		responsive: [
		    {
		     breakpoint: 400,
			 settings: {
				 arrows: true,
				 centerMode: true,
				 centerPadding: '0px',
				 slidesToShow: 1
				}
			}
		],
	});
	$('.centers').slick({
  		centerMode: true,
  		centerPadding: '90px',
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		arrows: true,
  		prevArrow: '<button type="button" class="slicks-prev"></button>',
  		nextArrow: '<button type="button" class="slicks-next"></button>',
  		dots: true,
  		variableWidth:true,
  		responsive: [
		    {
		     breakpoint: 400,
			 settings: {
				 arrows: true,
				 centerMode: true,
				 centerPadding: '0px',
				 slidesToShow: 1
				}
			}
		],
	});	
});