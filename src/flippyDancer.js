var makeShrinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeShrinkyDancer.prototype = Object.create(makeDancer.prototype);
makeShrinkyDancer.prototype.constructor = makeShrinkyDancer;

makeShrinkyDancer.prototype.step = function() {
  this.$node.animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
  makeDancer.prototype.step.call(this);
};