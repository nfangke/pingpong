// BUSINESS LOGIC
var userInput;

var replaceValArray = [];

// determine if input is valid
var ifNumber = function(userInput) {
  if (userInput === NaN || userInput < 0 || userInput % 1 !==0) {
  return false;
  } else { return true;
    }
}

// Creates a new array from 1 to n
var countInput = function(userInput) {

  var userInputArray = [];

  for (i = 1; i < userInput + 1; i++) {
    userInputArray.push(i);
  }

  // Replaces array items into the list
  userInputArray.forEach(function(list) {
    if (list % 15 === 0) {
      $("ul").append("<li>" + "PINGPONG" + "</li>");
    } else if (list % 5 === 0) {
      $("ul").append("<li>" + "PONG" + "</li>");
    } else if (list % 3 === 0) {
      $("ul").append("<li>" + "PING" + "</li>");
    } else {
      $("ul").append("<li>" + list + "</li>");
    }

  });
};


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

      $(".result").show();
    }
  });

});
