'use strict';

$(document).ready(init);

function init() {

  var $numButton = $('.number');
  var $operatorButton = $('.operator');
  var $topButton = $('.top');
  var inputVal = '';
  var answer = "";
  var $display = $('.display');
  var operator;

  function updateDisplay(val){
    $display.text(val);
  }

  $numButton.click(function(evt) {
    if (inputVal.length < 10){
      var number = $(this).text();
      if (number === "." && /\./.test(inputVal)){
        return;
      };
      inputVal += number;
      updateDisplay(inputVal);
    } else {
    $display.fadeOut('fast').fadeIn('fast');
    }
  });

  $operatorButton.click(function(evt) {
    if (answer === ""){
      answer = inputVal; 
    } else if (inputVal !== '') {
      switch (operator) {
        case "x":
        answer *= inputVal;
        updateDisplay(answer);
        break
        case "/":
        answer =  answer / inputVal;
        updateDisplay(answer);
        break
        case "+":
        answer = parseFloat(answer)+parseFloat(inputVal);
        updateDisplay(answer);
        break
        case "-":
        answer -= inputVal;
        updateDisplay(answer);
        break
        case "=":
        updateDisplay(answer);
      } 
    }
    operator = $(this).text();
    inputVal = '';

  })
  $topButton.click(function(evt) {
    var top = $(this).text();
    switch (top) {
      case "C":
      $display.text(0);
      inputVal = '';
      answer = '';
      break;
      case "%":
      if (inputVal !== ''){
        inputVal = inputVal/100;
        updateDisplay(inputVal);
      } else {
        answer = answer/100;
        updateDisplay(answer);
      }
      break
      case "+/-":
      if (inputVal !== '') {
        inputVal *= -1;
        updateDisplay(inputVal);
      } else {
        answer *= -1;
        updateDisplay(answer); 
      }
    }
  });






}