// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var makeDancer = function (top, left, timeBetweenSteps, URL) {
  this.$node;
  this.assignNode(URL);
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);

};

makeDancer.prototype.assignNode = function (URL) {
  this.$node = $(`<span class="dancer"><img class="dancerImg" src = ${URL}></span>`)
}

makeDancer.prototype.bounce = function (stop) {
  var settings = {
    speed: 10
  };

  return $(this).each(function () {

    var $this = this.$node,
      $parent = $(document.body),
      height = $parent.height(),
      width = $parent.width(),
      top = Math.floor(Math.random() * (height / 2)) + height / 4,
      left = Math.floor(Math.random() * (width / 2)) + width / 4,
      vectorX = settings.speed * (Math.random() > 0.5 ? 1 : -1),
      vectorY = settings.speed * (Math.random() > 0.5 ? 1 : -1);

    $this.css({
      'top': top,
      'left': left
    }).data('vector', {
      'x': vectorX,
      'y': vectorY
    });

    var move = function ($e) {
      var leftPx = parseInt($e.css('left'))
      var topPx = parseInt($e.css('top'))
      for (var dancer of window.dancers) {
        if (dancer.$node !== $e) { //make sure to not compare with self
          var dancerLeftPx = parseInt(dancer.$node.css('left'));
          var dancerTopPx = parseInt(dancer.$node.css('top'));
          if (Math.abs(leftPx - dancerLeftPx) < 50 && Math.abs(topPx - dancerTopPx) < 50) { //if top left corner is close enough to other dancer, remove
            dancer.$node.remove();
            $e.remove();
            let index = window.dancers.indexOf(dancer);
            window.dancers.splice(index,1);
            index = window.dancers.findIndex((dancer) => dancer.$node === $e);
            window.dancers.splice(index,1);
            return;
          }
        }

      }
      if ($e.data('vector') !== undefined) {
        var offset = $e.offset(),
          width = $e.width(),
          height = $e.height(),
          vector = $e.data('vector'),
          $parent = $e.parent();

        if (offset.left <= 0 && vector.x < 0) {
          vector.x = -1 * vector.x;
        }
        if ((offset.left + width) >= $parent.width()) {
          vector.x = -1 * vector.x;
        }
        if (offset.top <= 0 && vector.y < 0) {
          vector.y = -1 * vector.y;
        }
        if ((offset.top + height) >= $parent.height()) {
          vector.y = -1 * vector.y;
        }

        $e.css({
          'top': offset.top + vector.y + 'px',
          'left': offset.left + vector.x + 'px'
        }).data('vector', {
          'x': vector.x,
          'y': vector.y
        });

        setTimeout(function () {
          move($e);
        }, 5);

      };
    }

    move(this.$node);
  });
};