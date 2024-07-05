jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var triggerPoint = 100; // Change this to the point you want the effect to trigger
            console.log(scrollPosition)
        if (scrollPosition >= triggerPoint) {
            // Add your CSS changes here
            $('.elementor-element-36ddce3').css({
                'background-color': 'white',
				
                
            });
			$('.elementor-element-36ddce3 ul li a').css({
                'color': 'black',
				
                
            });
        } else {
            // Revert CSS changes here
            $('.elementor-element-36ddce3').css({
                'background-color': '',
              'color':'white',
            });
				$('.elementor-element-36ddce3 ul li a').css({
                'color': 'black',
				
                
            });
        }
    });

});