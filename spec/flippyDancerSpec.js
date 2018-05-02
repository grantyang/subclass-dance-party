describe('flippyDancer', function () {

  var flippyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    flippyDancer = new makeFlippyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(flippyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should move back and forth', function () {
    flippyDancer.step();
    var location2 = setTimeout(function () {
      return flippyDancer.$node.css('left');
    }, 5)
    expect(flippyDancer.$node.css('left') === location2).to.equal.false;
  });
});
