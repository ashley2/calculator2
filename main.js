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
    var number = $(this).text();
    if (number === "." && /\./.test(inputVal)){
      return;
  };
    inputVal += number;
    updateDisplay(inputVal);
  });

  $operatorButton.click(function(evt) {
    if (answer === ""){
      answer = inputVal; 
    } else if (inputVal !== '') {
      switch (operator) {
        case "X":
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
    console.log("button clicked!");
    var top = $(this).text();
    switch (top) {
      case "C":
      $display.text(0);
      inputVal = '';
      answer = "";
      break;
      case "%":
      answer = inputVal /100
      updateDisplay(answer);
      break
      case "+/-":
      if (inputVal !== "") {
        inputVal *= -1;
        updateDisplay(inputVal);
      } else {
        answer *= -1;
      updateDisplay(answer); 
      }
    }
});






}