describe("getCard", function() {
  it("return a new card", function() {
    var ourSuit = suit();
    var ourValue = cardValue();
    expect(getCard(ourSuit, ourValue)).to.eql([ourSuit, ourValue]);
  });
});

describe("isExisting", function() {
  it("Check that card does exist in the deck", function() {
    var card = getRandomCard();
    var tableHands = [];
    tableHands.push(card);
    expect(isExisting(tableHands, card)).to.equal(true);
  });
});
