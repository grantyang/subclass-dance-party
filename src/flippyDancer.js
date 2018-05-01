var makeFlippyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;

makeFlippyDancer.prototype.step = function() {
  this.$node.animate({
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1),
  }, 1500 );

  this.$node.animate({
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1),
  }, 3000 );
  makeDancer.prototype.step.call(this);
};