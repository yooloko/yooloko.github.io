// jQuery | $

 alert('BOOO!1');

 (function() {
 	var $toolTip = $('<div class="tooltip"></div>');
 	// debugger;
 	$('input[id]').each(function(){
 		var $this = $(this),
 		title = $this.attr('title');
 		// this.title = "";
 		// debugger;
 		$this.mouseover(function(e){
 			// debugger;
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

 $('.show-help').on('click', function(){
 	alert('BOOO!2');
 	var titleArr = [];
 	$('input').each(function(){
 		titleArr.push($(this).attr('title'));
 		console.log('title', $(this).attr('title'));
 		debugger;
 	});

 	// ??var toolTipArr = [<div class='tool-tip-arr'><div/>, <div class='tool-tip-arr'><div/>, <div class='tool-tip-arr'><div/>];
 	var i = 0;
 	$('.tool-tip-arr').each(function(){
 	$(this)
 		.append('titleArr[i]')
 		.prependTo('form')
 		.hide()
 		.css({
 			top: e.pageY + 10,
 			left: e.pageX + 30
 		}).fadeIn(300);
 		i++;
 	});
 });