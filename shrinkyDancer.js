var makeShrinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeShrinkyDancer.prototype = Object.create(makeDancer.prototype);
makeShrinkyDancer.prototype.constructor = makeShrinkyDancer;

makeShrinkyDancer.prototype.step = function() {
  this.$node.toggle();  
  makeDancer.prototype.step.call(this);
};