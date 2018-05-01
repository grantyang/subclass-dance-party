$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.bounce').on('click', function (event) {
    window.dancers.forEach((dancer, index) => {
      dancer.bounce(true)
    });
  })
  $('.stop').on('click', function (event) {
    window.dancers.forEach((dancer, index) => {
      dancer.bounce(false)
    });
  })

  $('.lineUp').on('click', function (event) {
    window.dancers.forEach((dancer, index) => {
      dancer.setPosition('50%', ((100 / window.dancers.length) * index + 1).toString() + '%');
    })
  })

});