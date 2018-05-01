$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    if (dancerMakerFunctionName === 'makeGrowyDancer') {
      $('body').append(dancer.$nodeRick);
    } else if (dancerMakerFunctionName === 'makeBlinkyDancer') {
      $('body').append(dancer.$nodeBrian);
    } else if (dancerMakerFunctionName === 'makeFlippyDancer') {
      $('body').append(dancer.$nodeBender);
    }
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach((dancer, index) => {
      dancer.setPosition(index, 0);
    })
  })
    
});

