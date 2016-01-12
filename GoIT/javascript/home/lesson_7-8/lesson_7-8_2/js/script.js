// jQuery | $

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
 				.prependTo(form)
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
 	});
 	var toolTipArrObject = ["<div><div/>","<div><div/>","<div><div/>"];
 	var toolTipArr = jQuery.makeArray(toolTipArrObject);
 	var i = 0;
 	debugger;
 	$('div:not(".wrapper")').each(function(){
 	debugger;
 	$(this)
 		.append(titleArr)
 		.prependTo(form)
 		.hide()
 		.css({
 			top: e.pageY + 10,
 			left: e.pageX + 30
 		}).fadeIn(300);
 		i++;
 	});
 });