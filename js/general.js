$(function(){
	$('a[rel="fancybox"]').fancybox();
	
	var animationEnd = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
	$('ul.gallerie').click(function(){
		var lis = $(this).find('li');
		var animated = -1;
		
		(function(){
			if (animated < lis.length) animated++;
			var caller = arguments.callee;
			
			lis.eq(animated).addClass('appear').one(animationEnd, function(){
				caller();
			});
		})();
		
	});
});