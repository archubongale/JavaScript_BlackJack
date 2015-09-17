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

describe("isBust", function() {
  it("should return true is hand value is greater than 21", function() {
    var playerValueArray = [10, 10, 3];
    expect(isBust(playerValueArray)).to.equal(true);
  });

  it("should return false is hand value is less than 21", function() {
    var playerValueArray = [10, 10];
    expect(isBust(playerValueArray)).to.equal(false);
  });
});
