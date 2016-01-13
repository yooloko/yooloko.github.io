 alert('BOOO!1');

 (function() {
 	var $toolTip = $('<div class="tooltip"></div>');
 	$('input[id]').each(function(){
 		var $this = $(this),
 		title = $this.attr('title');
 		// this.title = "";
 		$this.mouseover(function(e){
 			$toolTip
 				.append(title)
 				// .prependTo(form)
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

  $('.show-help').on('click', function(){
 	alert('BOOO!2');
 	$('input').each(function(){
 		var $divToolTip = $('<div class="tooltip"></div>');
 		$divToolTip
 			.text($(this).attr('title'))
 			.prependTo('form')
 			.hide()
 			.css({
 					top: $(this).position().top + 10,
 					left: $(this).position().left + 30
 			}).fadeIn(300);
 	});
 });