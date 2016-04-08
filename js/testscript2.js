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
  var lArray = [];
  for (i = 1; i < userInput +1; i++) {
    userInputArray.push(i);
   }
   console.log(userInputArray);

    userInputArray.forEach(function(itemNum) {

    	if (itemNum % 15 === 0) {
      	lArray.push("PINGPONG");
      } else if (itemNum % 5 === 0) {
      	lArray.push("PONG");
      } else if (itemNum % 3 === 0) {
      	lArray.push("PING");
      } else {
      	lArray.push(itemNum);
      }
      return lArray
      console.log(lArray)
  });
};


// UI Logic
$(document).ready(function() {
  // removeList();
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#pingPongList").empty();

    userInput = parseInt($("#userInput").val());

    var resultIfNumber = ifNumber(userInput);

    if (!resultIfNumber) {
      alert("Please enter a whole number greater than zero");
    } else {

      countInput(userInput);

      lArray.forEach(function(listItem) {
        $("ul").append("<li>" + listItem + "</li>");
      });

      $(".result").show();
      // listArray = [];
    }
  });
});
