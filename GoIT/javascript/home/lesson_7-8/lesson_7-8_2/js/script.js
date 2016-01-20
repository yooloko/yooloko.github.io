// jQuery | $

 alert('BOOO!1');

 (function() {
 	var $toolTip = $('<div class="tooltip"></div>');
 	$('input').each(function(){
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
 			$this.removeAttr(title);
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
  			.prependTo('.wrapper')
  			.hide()
  			.css({
  					"padding": "5px 0 6px 5px",
            "background-color": "#3e9ee3",
            "color":"#fff",
            "border-radius": "3px",
            "font-family": "Lato Latin Regular",
            "margin-top": "10px",
            "margin-bottom": "10px",
            "font-size": "14px",
            "top": "300px",
            "left": "400px"
  			}).fadeIn(300);
  	});
  });