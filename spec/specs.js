describe("wordFrequencyArray", function() {
  it("returns 2D array of [key, value] by value", function() {
    var text = "Fun java. Yay java!";
    var sortedArray = [["java", 2], ["fun", 1], ["yay", 1]];
    expect(wordFrequencyArray(text)).to.eql(sortedArray);
  });
});
