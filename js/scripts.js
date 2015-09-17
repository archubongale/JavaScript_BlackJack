var tableHands = [];
var dealerHand = [];
var playerHand = [];


var suit = function (){
  var suitName = ["spade", "heart", "diamond", "club"];
  return suitName[Math.floor((Math.random() * 4))];
};

var cardValue = function (){
  return Math.floor((Math.random() * 13)+1);
};

var getCard = function (suit, cardValue) {
  var card = [];
  // card.push(suit(), cardValue());
  card.push(suit, cardValue);
  return card;
};

var getRandomCard = function () {
  var card = [];
  card.push(suit(), cardValue());
  return card;
};


var isExisting= function(tableHands, card) {
  for(var i= 0; i< tableHands.length; i++){
    var tableCard = tableHands[i];
    if (tableCard[0] === card[0] && tableCard[1]===card[1]){
      return true;
    } else {
      return false;
    }
  }
};


var getNewCard = function() {
  var newCard = getRandomCard();
  while(isExisting(newCard)){
    newCard = getRandomCard();
  }

  return newCard;
};

var storeValueToHand = function (handArray, card){
  handArray.push(card); // store the card into player's hand
  tableHands.push(card); // store the card to table hand
  return handArray;
};



// maybe we don't need this function
var emptyHand = function (handArray){
  array = [];
  return array;
};




// $(document).ready(function() {
//   $("form#wordFrequency").submit(function(event) {
//     // $("ul").empty();
//     // var text = $("input#userText").val();
//     // var result = wordFrequencyArray(text);
//     //
//     // for (var i = 0; i < result.length; i++) {
//     //   $("ul").append("<li>" + result[i][0] + " : " + result[i][1] + "</li>");
//     // }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
