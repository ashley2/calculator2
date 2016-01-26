'use strict';

$(document).ready(init);

function init() {

  var $numButton = $('.number');
  var $operatorButton = $('.operator');
  var $topButton = $('.top');
  var inputVal = '';
  var calculatedVal = "";
  var $display = $('.display');

  function updateDisplay(val){
    $display.text(val);

  }



  $numButton.click(function(evt) {
    var number = $(this).text();
    inputVal += number;
     updateDisplay(inputVal);
  });

  $operatorButton.click(function(evt) {
    if (calculatedVal === ""){
      calculatedVal = inputVal; 
      inputVal = '';
    }
    var operator = $(this).text();
    switch (operator) {
      case "X":
      var answer = inputVal * calculatedVal;
      updateDisplay(answer);
      break
      case "/":
      var answer =  calculatedVal / inputVal;
      updateDisplay(answer);
      break
      case "+":
      var answer = inputVal + calculatedVal;
      updateDisplay(answer);
      break
      case "-":
      var answer = calculatedVal - inputVal;
      updateDisplay(answer);
      break
    }
  });


  $topButton.click(function(evt) {
    console.log("button clicked!");
    var top = $(this).text();
      switch (top) {
        case "C":
        $display.text(0);
        inputVal = '';
        calculatedVal = "";

      }
    });






  }