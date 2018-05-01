

var makeFlippyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;

makeFlippyDancer.prototype.step = function() {
  this.$nodeBender.animate({ "position": "relative" }, "slow" );
  this.$nodeBender.animate({ "left": "-=50px" }, "slow" );
  this.$nodeBender.animate({ "left": "+=50px" }, "slow" );

  makeDancer.prototype.step.call(this);
};