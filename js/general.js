$(function(){
	$('a[rel="galerie"], a[rel="travaux"]').fancybox();
	
	var transitioned = false;
	var animationEnd = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
	
	$(document).on('scroll', function(){
		if (isElementInViewport($('ul.gallerie')[0]) && !transitioned){
			transitionGalerie();
		}
	});
	
	function transitionGalerie(){
		transitioned = true;
		var lis = $('ul.gallerie li');
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