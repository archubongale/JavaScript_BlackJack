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
  var hasCard = false;
  for(var i= 0; i< tableHands.length; i++){
    var tableCard = tableHands[i];
    if (tableCard[0] === card[0] && tableCard[1]===card[1]){
      hasCard = true;
    }
  }
  return hasCard;
};

var getNewCard = function() {
  var newCard = getRandomCard();
  while(isExisting(tableHands, newCard)){
    newCard = getRandomCard();
  }
  return newCard;
};

var saveCardToHand = function (handArray, card){
  handArray.push(card); // store the card into player's hand
  tableHands.push(card); // store the card to table hand
  return handArray;
};

var getHandValue = function(handArray){
  var valueArray = [];
  for (var i in handArray){
    valueArray.push(handArray[i][1]);
  }
  return valueArray;
};

var isContainAce = function(valueArray) {
  var hasAce = false;
  for(var i in valueArray) {
    console.log(valueArray[i]);
    if(valueArray[i] === 1) {
      hasAce = true;
    }
  }
  return hasAce;
};

var calculateValues = function(valueArray){
  var totalValue = 0;
  for (var i in valueArray){
    if (valueArray[i] <= 10){
    totalValue += valueArray[i];
    } else if (valueArray[i] > 10){
    totalValue += 10;
    }
  }
  return totalValue;
};

var gameResult = function (playerArray, dealerArray) {
  var result = "";

  var playerTotal = calculateValues(playerArray);
  var dealerTotal = calculateValues(dealerArray);

  if (playerTotal > 21){
    result = "You busted!!";
  } else if (dealerTotal > 21){
    result = "Dealer busted!!";
  } else {

       if (playerTotal > dealerTotal){
        result = "You win!";
      } else if(dealerTotal > playerTotal){
        result = "Dealer win!";
      } else {
        result = "It's a push!";
      }
  }
  return result;
};

var allEmpty = function (){
  tableHands = [];
  dealerHand = [];
  playerHand = [];
};


$(document).ready(function() {
  $("form#blackjack").submit(function() {
    $(".player").empty();
    $(".dealer").empty();
    $(".result").empty();

    allEmpty();

    saveCardToHand(playerHand, getNewCard());
    saveCardToHand(playerHand, getNewCard());
    $(".player").text(playerHand);


    saveCardToHand(dealerHand, getNewCard());
    saveCardToHand(dealerHand, getNewCard());
    $(".dealer").text(dealerHand);


    $(".player").show();
    $(".dealer").show();
    event.preventDefault();
  });

  $("form#hit").submit(function() {
    $(".player").empty();
    saveCardToHand(playerHand, getNewCard());
    $(".player").text(playerHand);



    $(".player").show();
    event.preventDefault();
  });

  $("form#stand").submit(function() {

    // while (calculateValues(dealerHand) < 17) {
    //   saveCardToHand(dealerHand, getNewCard());
    // }

    var winner = gameResult(getHandValue(playerHand), getHandValue(dealerHand));

    $(".player").text(playerHand);
    $(".dealer").text(dealerHand);
    $(".result").text(winner);
    console.log(winner);

    $(".player").show();
    $(".dealer").show();
    $(".result").show();
    event.preventDefault();
  });

});
