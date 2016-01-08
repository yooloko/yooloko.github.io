// jQuery | $

 // alert('BOOOOOO');

 (function() {
 	var $toolTip = $('<div class="tooltip"></div>');
 	debugger;
 	$('input[id]').each(function(){
 		var $this = $(this),
 		title = $this.attr('title');
 		// this.title = "";
 		debugger;
 		$this.mouseover(function(e){
 			debugger;
 			$toolTip
 				.append(title)
 				.prependTo('form')
 				.hide()
 				.css({
 					top: e.pageY + 10,
 					left: e.pageX + 30
 				}).fadeIn(300);
 		}, 
 		function() {
 			$('.tooltip').empty().remove();
 		});
 	});

 })();

	// $('.show-help').on('click', function(){
	// 	$('.tooltip').animate({opacity: 1}, 300);
	// 	setTimeout(function(){
	// 		$(".tooltip").stop().animate({ "opacity": 0 },300);
	// 	}, 2000);
	// })

  	