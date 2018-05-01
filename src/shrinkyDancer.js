

var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeGrowyDancer.prototype = Object.create(makeDancer.prototype);
makeGrowyDancer.prototype.constructor = makeGrowyDancer;

makeGrowyDancer.prototype.step = function() {
  this.$node.animate({
    width: "10%",
    opacity: 0.4,
    height: "10%",
  }, 1500 );
  makeDancer.prototype.step.call(this);
};