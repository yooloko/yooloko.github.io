// jQuery | $

alert('BOOOOOO');

	var $wrapperTabs = $('<div class="wrapper"></div>');
	
	var $contents = $('<div class="tab_content"></div>');
	var $items = $('<div class="article1"></div><div class="article2"></div><div class="article3"></div>');
	$items.addClass("tab_item");



	var $tabs = $('<div class="tabs"></div>');
	var $tab = $('<span>NUNC TINKIDUNT</span><span>PROIN DOLOR</span><span>AENEAN LACINIA</span>');
	$tab.addClass("tab");


	$('body').append($wrapperTabs);
	$wrapperTabs.append($tabs);
	$wrapperTabs.append($contents);
	$contents.append($items);
	$tabs.append($tab);


	$('.article1').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam maxime id expedita commodi? Eius, accusantium neque placeat facere minus deserunt praesentium dolorem nulla nihil consectetur aliquid, quos quo quas reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quos, alias nam aliquam quibusdam placeat nesciunt repellendus nostrum earum consectetur et laboriosam, numquam voluptatum corrupti quis, quod architecto repudiandae ullam.');
	$('.article2').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorem, tempora rem obcaecati corporis. Nesciunt aliquid excepturi, sint odio. Vitae ipsum aliquid aperiam itaque repellat maiores voluptatibus debitis dignissimos, voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem optio hic eveniet tempore quae amet. Vel est hic ea, adipisci? Ducimus consequatur cum iste laboriosam recusandae, eius a atque veritatis.');
	$('.article3').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eos. Accusamus veritatis quo tempore voluptatum nobis delectus laborum corporis, quasi, quia quaerat asperiores enim commodi nihil repudiandae nostrum doloremque eligendi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique quam distinctio placeat quisquam tempora magni ad. Voluptatum, facilis, magnam. Et rerum porro, voluptate facilis ad tempore corrupti explicabo magni.');


 	$(".tab_item").not(":first").hide();
 	$(".wrapper .tab").click(function() {
 	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab_item").hide().eq($(this).index()).fadeIn()
	 }).eq(0).addClass("active");

