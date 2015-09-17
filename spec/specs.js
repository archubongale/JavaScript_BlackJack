describe("getCard", function() {
  it("return a new card", function() {
    var ourSuit = suit();
    var ourValue = cardValue();
    expect(getCard(ourSuit, ourValue)).to.eql([ourSuit, ourValue]);
  });
});

describe("isExisting", function() {
  it("returns true if card does exist in the deck", function() {
    var card = getRandomCard();
    var tableHands = [];
    tableHands.push(card);
    expect(isExisting(tableHands, card)).to.equal(true);
  });

  it("returns true if card does exist in the deck", function() {
    var card = ["spade", 1];
    var card2 = ["heart", 3];
    var tableHands = [];
    tableHands.push(card);
    tableHands.push(card2);
    var newCard = ["heart", 3];
    expect(isExisting(tableHands, newCard)).to.equal(true);
  });

  it("returns false if card does NOT exist in the deck", function() {
    var card = ["spade", 1];
    var tableHands = [];
    tableHands.push(card);
    var newCard = ["spade", 2];
    expect(isExisting(tableHands, newCard)).to.equal(false);
  });
});

describe("getNewCard", function() {
  it("new card gets a value that has not been selected", function() {
    var card = ["spade", 1];
    var tableHands = [];
    tableHands.push(card);
    expect(getNewCard()).to.not.equal(tableHands[0]);
  });
});

describe("saveCardToHand", function() {
  it("card should save in player's hand of cards", function() {
    var card = ["spade", 1];
    var playerHands = [];
    saveCardToHand(playerHands, card);
    expect(playerHands[0]).to.eql(card);
  });
});

describe("getHandValue", function() {
  it("save only card values from player's hand of cards", function() {
    var cardOne= ["spade", 4];
    var cardTwo= ["club", 10];
    var playerHands = [];
    playerHands.push(cardOne);
    playerHands.push(cardTwo);
    expect(getHandValue(playerHands)).to.eql([4, 10]);
  });
});


describe("calculateValues", function() {
  it("should return total value of card in hand", function() {
    var playerValueArray = [1];
    expect(calculateValues(playerValueArray)).to.equal(1);
  });

  it("should return total value of cards in hand", function() {
    var playerValueArray = [1, 5];
    expect(calculateValues(playerValueArray)).to.equal(6);
  });

  it("should return total value of cards in hand", function() {
    var playerValueArray = [1, 12];
    expect(calculateValues(playerValueArray)).to.equal(11);
  });
});


describe("isContainAce",function() {
  it("returns true if the array contains 1", function() {
    var playerValueArray = [10, 1, 3];
    expect(isContainAce(playerValueArray)).to.equal(true);
  });
});

describe("gameResult",function() {
  it("returns You Busted if total is greater than 21", function() {
    var playerArray = [10, 10, 3];
    var dealerArray = [10, 4, 3];
    expect(gameResult(playerArray, dealerArray)).to.equal("You busted!!");
  });

  it("returns Dealer Busted if total is greater than 21", function() {
    var playerArray = [10, 10, 1];
    var dealerArray = [10, 4, 9];
    expect(gameResult(playerArray, dealerArray)).to.equal("Dealer busted!!");
  });

  it("returns You win if player total is greater than dealer", function() {
    var playerArray = [10, 10, 1];
    var dealerArray = [10, 4, 3];
    expect(gameResult(playerArray, dealerArray)).to.equal("You win!");
  });

  it("returns dealer wins if player total is less than dealer", function() {
    var dealerArray = [10, 10, 1];
    var playerArray = [10, 4, 3];
    expect(gameResult(playerArray, dealerArray)).to.equal("Dealer win!");
  });

  it("returns tie if player ties with dealer", function() {
    var dealerArray = [10, 9, 1];
    var playerArray = [10, 9, 1];
    expect(gameResult(playerArray, dealerArray)).to.equal("It's a push!");
  });
});
