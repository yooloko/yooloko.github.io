'use strict';

(function() {
  var html = $('#test').html();
  var dataObj = [{
    question: 'Lorem ipsum',
    ansOptions: ['0Lorem ipsum', '1Lorem ipsum', '2Lorem ipsum'],
    correct: '0Lorem ipsum'
  }, 
  {
    question: 'consectetur adipisicing',
    ansOptions: ['0Lorem ipsum', '1Lorem ipsum', '2Lorem ipsum'],
    correct: '2Lorem ipsum'
  }, 
  {
    question: 'dolor sit amet',
    ansOptions: ['0Lorem ipsum', '1Lorem ipsum', '2Lorem ipsum'],
    correct: '1Lorem ipsum'
  },
  {
    submit_btn: 'Проверить мои результаты'
  }];

  localStorage.setItem('test-data', JSON.stringify(dataObj));
  var testDataObj = localStorage.getItem('test-data');

  testDataObj = JSON.parse(testDataObj);

  var content = tmpl(html, {data: testDataObj});
  $('body').append(content);

})();