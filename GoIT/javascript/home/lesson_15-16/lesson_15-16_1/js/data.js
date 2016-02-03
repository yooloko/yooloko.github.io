'use strict';

$(function(){
  var html = $('#quiz').html();
  var quizData = [{
    question: 'ЧСС здорового человека:',
    quizoption: ['60-80 ударов в минуту', '70-80 ударов в минуту', '60-70 ударов в минуту'],
    correct: '60-80 ударов в минуту'
  },
  {
    question: 'ЧСС здорового человека во время сна:',
    quizoption: ['40-50 ударов в минуту', '40-60 ударов в минуту', '60-70 ударов в минуту'],
    correct: '40-60 ударов в минуту'
  },
  {
    question: 'ЧСС кота:',
    quizoption: ['110-140 ударов в минуту', '110-140 ударов в минуту', '110-140 ударов в минуту'],
    correct: '110-140 ударов в минуту'
  },
  {
    submit: 'Проверь результаты'
  },
  {
    name: 'Тест'
  }];

  localStorage.setItem('test', JSON.stringify(quizData));
  // quizData = JSON.parse(localStorage.getItem('test'));

  var content = tmpl(html, {data: quizData});
  $('body').append(content);



});