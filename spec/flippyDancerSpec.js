describe('flippyDancer', function() {

  var flippyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flippyDancer = new makeFlippyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flippyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(flippyDancer.$node, 'toggle');
    flippyDancer.step();
    expect(flippyDancer.$node.toggle.called).to.be.true;
  });

});
