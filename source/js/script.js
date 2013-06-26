var $el = $('#wrapper');

$('html').on('mousedown', function(e){
	$el.css( {'left': e.clientX-'75', 'top': e.clientY-'75'} )
	   .removeClass('end')
	   .addClass('start');	
}).on('mousemove', function(e){
	$el.css( {'left': e.clientX-'75', 'top': e.clientY-'75'} );
}).on('mouseup', function(e){
	$el.removeClass('start')
	   .addClass('end');		
});

$el.bind('webkitAnimationEnd', function(e) {	
	$el.removeClass( 'start end' );
});

