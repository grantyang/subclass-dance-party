
var makeFlippyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeShrinkyDancer.prototype = Object.create(makeDancer.prototype);
makeShrinkyDancer.prototype.constructor = makeShrinkyDancer;

makeFlippyDancer.prototype.step = function() {
  this.$nodeBender.animate({ "position": "relative" }, "slow" );
  this.$nodeBender.animate({ "left": "-=50px" }, "slow" );
  this.$nodeBender.animate({ "left": "+=50px" }, "slow" );

  makeDancer.prototype.step.call(this);
};