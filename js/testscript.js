// BUSINESS LOGIC
var userInput;

// Determines if input is valid
var ifNumber = function(userInput) {
  if (userInput === NaN || userInput < 0 || userInput % 1 !==0) {
  return false;
  } else { return true;
    }
}

// Creates a new array from 1 to n
var countInput = function(userInput) {
  var userInputArray = [];

  for (i = 1; i < userInput +1; i++) {
    userInputArray.push(i);

  }

// Creates a new array from 1 to n
  for (j = 0; j < userInputArray.length; j++) {
  	if (userInputArray[j] % 15 === 0) {
    	listArray.push("PINGPONG");
    } else if (userInputArray[j] % 5 === 0) {
    	listArray.push("PONG");
    } else if (userInputArray[j] % 3 === 0) {
    	listArray.push("PING");
    } else {
    	listArray.push(userInputArray[j]);
    }

  }


  };

  var listArray = [];

// UI Logic
$(document).ready(function(){
  // removeList();
  $("form").submit(function(event){
    event.preventDefault();

    $("ul#pingPongList").empty();

    userInput = parseInt($("#userInput").val());

    var resultIfNumber = ifNumber(userInput);

    if (!resultIfNumber) {
      alert("Please enter a whole number greater than zero");
    } else {

      countInput(userInput);

      listArray.forEach(function(listItem) {
        $("ul").append("<li>" + listItem + "</li>");
      });

      $(".result").show();
      listArray = [];
    }
  });

});
