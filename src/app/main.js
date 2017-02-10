(function() {
  $(document).ready(function() {
    $('.carousel').carousel()
  });

  const $tilesContainer = $(".tiles-container");
  const $tiles = $(".tile");


  const checkOverlay = function(target) {
    if (target.hasClass("overlay")) {
      return target.css("display");
    }
    return target.next("div").css("display")
  };

  const addOverlay = function(target) {
    target.next().css("display", "block");
  };

  const removeOverlay = function(target) {
    if (target.hasClass("overlay")) {
      target.css("display", "none");
    }
    else if(target.hasClass("overlay-text")) {
      target.parent().css("display", "none");
    }
  };

  const handleOverlay = function(target) {
    if (checkOverlay(target) === 'none') {
      addOverlay(target)
    }
    else if (checkOverlay(target) === 'block') {
      removeOverlay(target)
    }
  };

  $tilesContainer.click((event) => {
    let $target = $(event.target)

    if (checkOverlay($target) === 'none') {
      handleOverlay($target)  
    }
  })
})();
