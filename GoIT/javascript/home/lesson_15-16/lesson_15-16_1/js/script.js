function GoogleCallback(func, data) {
  window[func](data);

  var ul = document.createElement("ul");

  jQuery.each(data.results, 
    function(i, val) {
      var li = document.createElement("li");
      li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content; 
      ul.appendChild(li);
    }
  );
  $('#results').html(ul);
}

$(function() {
  $('#searchform').submit(function(e) {
    // event.preventDefault();
    // event.stopPropagation();
    console.log($('#request').val());
    $.ajax({
      url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ encodeURIComponent($('#request').val()) + '&callback=GoogleCallback&context=?',
      dataType: 'jsonp'
    });
  });
});