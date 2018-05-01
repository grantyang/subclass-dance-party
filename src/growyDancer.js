

var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeGrowyDancer.prototype = Object.create(makeDancer.prototype);
makeGrowyDancer.prototype.constructor = makeGrowyDancer;

makeGrowyDancer.prototype.step = function() {
  this.$node.animate({
    width: "+=30%",
    height: "+=30%",
  }, 1500 );

  this.$node.animate({
    width: "-=30%",
    height: "-=30%",
  }, 3000 );
  makeDancer.prototype.step.call(this);
};