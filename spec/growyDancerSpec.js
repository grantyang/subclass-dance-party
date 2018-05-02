describe('growyDancer', function() {

  var growyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growyDancer = new makeGrowyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(growyDancer.$node).to.be.an.instanceof(jQuery);
  });


});
