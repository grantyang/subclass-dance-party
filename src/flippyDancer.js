
var makeFlippyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'https://julianish.files.wordpress.com/2013/03/bender13.gif');
};

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;

makeFlippyDancer.prototype.step = function() {
  this.$node.animate({ "position": "relative" }, "slow" );
  this.$node.animate({ "left": "-=50px" }, "slow" );
  this.$node.animate({ "left": "+=50px" }, "slow" );

  makeDancer.prototype.step.call(this);
};