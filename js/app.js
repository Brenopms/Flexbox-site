// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


// Scroll suave para link interno
$('.menu-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});



// Botão do menu mobile
$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

$('.menu-nav.mobile-menu li a').click(function(){
	$('.mobile-menu').toggleClass('active');
	$('.mobile-btn').toggleClass('active');
});


(function(){
	var $target = $('[data-anime="scroll"]'),
			animationClass = 'animate',
			offset = $(window).height() * 5/7;
	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 150));
})();

