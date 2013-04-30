$(function(){
	$('a[rel="galerie"], a[rel="travaux"]').fancybox();
	
	var transitionedGalerie = false,
		transitionedTravaux = false;
	var animationEnd = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
	
	$(document).on('scroll', function(){
		if (isElementInViewport($('ul.galerie')[0]) && !transitionedGalerie){
			transitionedGalerie = true;
			initTransition('ul.galerie li');
		}
		if (isElementInViewport($('ul.travaux')[0]) && !transitionedTravaux){
			transitionedTravaux = true;
			initTransition('ul.travaux li');
		}
	});
	
	function initTransition(selector){
		var lis = $(selector);
		var animated = -1;
		
		(function(){
			if (animated < lis.length) animated++;
			var caller = arguments.callee;
			
			lis.eq(animated).addClass('appear').one(animationEnd, function(){
				caller();
			});
		})();
	}
	
	function isElementInViewport(el){
		var rect = el.getBoundingClientRect();

	    return (
	    	rect.top >= 0 &&
	        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight)+100 //&& /*or $(window).height() */
	    );
	}
});