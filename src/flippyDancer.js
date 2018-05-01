var makeFlippyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;

makeFlippyDancer.prototype.step = function() {
  this.$node.animate({
    transform: rotateY(180)
  }, 1500 );
  makeDancer.prototype.step.call(this);
};