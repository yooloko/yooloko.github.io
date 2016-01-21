$(function () {

  var firstname = $('#firstname').attr('title');
  var lastname = $('#lastname').attr('title');
  var address = $('#address').attr('title');

  var firstnameTooltip = ('<div class = "tooltip firstnameTooltip">' + firstname + '</div>');
  var lastnameTooltip = ('<div class = "tooltip lastnameTooltip">' + lastname + '</div>');
  var addressTooltip = ('<div class = "tooltip addressTooltip">' + address + '</div>');

  var tooltipRemove = function() {
    $(this).remove();
  };

  var tooltipHide = function() {
    $(this).attr('title', firstname);
    $('.tooltip').eq($(this).index()).animate({
      opacity: 0
    }, 300, tooltipRemove);
  };

  var lastnameTooltipVisible = function() {
    $(this).removeAttr('title');
    if ( !$('div').is($(this)) ) {
      $(this).parent().parent().append(lastnameTooltip);
      $(this).animate({
        opacity: 1
      }, 300);
    }
  };

  var firstnameTooltipVisible = function() {
    $(this).removeAttr('title');
    if ( !$('div').is($(this)) ) {
      $(this).parent().parent().append(firstnameTooltip);
      $(this).animate({
        opacity: 1
      }, 300);
    }
  };

  var addressTooltipVisible = function() {
    $(this).removeAttr('title');
    if ( !$('div').is($(this)) ) {
      $(this).parent().parent().append(addressTooltip);
      $(this).animate({
        opacity: 1
      }, 300);
    }
  };

  $('#firstname').on({
    mouseover: firstnameTooltipVisible,
    mouseout: tooltipHide
  });

  $('#lastname').on({
    mouseover: lastnameTooltipVisible,
    mouseout: tooltipHide
  });

  $('#address').on({
    mouseover: addressTooltipVisible,
    mouseout: tooltipHide
  });

  var tooltipVisible = function(event) {
    event.preventDefault();
    $('input').removeAttr('title');

    if ( !$('div').is('.firstnameTooltip') ) {
      $('.form_firstname').append(firstnameTooltip);
      $(this).animate({
        opacity: 1
      }, 300);
    }

    if ( !$('div').is('.lastnameTooltip') ) {
      $('.form_lastname').append(lastnameTooltip);
      $(this).animate({
        opacity: 1
      }, 300);
    }

    if ( !$('div').is('.addressTooltip') ) {
      $('.form_address').append(addressTooltip);
      $(this).animate({
        opacity: 1
      }, 300);
    }
  };

  $('.show-help').on({
    click: tooltipVisible
  });
});