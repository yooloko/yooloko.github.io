'use strict';

(function() {
  var html = $('#test').html();
  var dataObj = [{
    question: 'Lorem ipsum',
    options: [{'0Lorem ipsum'}, {'1Lorem ipsum'}, {'2Lorem ipsum'}],
    correct: '0Lorem ipsum'
  }, 
  {
    question: 'consectetur adipisicing',
    options: [{'0Lorem ipsum'}, {'1Lorem ipsum'}, {'2Lorem ipsum'}],
    correct: '2Lorem ipsum'
  }, 
  {
    question: 'dolor sit amet',
    options: [{'0Lorem ipsum'}, {'1Lorem ipsum'}, {'2Lorem ipsum'}],
    correct: '1Lorem ipsum'
  },
  {
    submit_btn: 'Проверить мои результаты'
  }];

  var content = tmpl(html, {data: dataObj});
  $('body').append(content);

})();