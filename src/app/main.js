(function() {
  $(document).ready(function() {
    $('.carousel').carousel()
  });

  const $tilesContainer = $(".tiles-container");
  const $tiles = $(".tile");
  const $overlays = $(".overlay");


  const addOverlay = function(target) {
    target.css('opacity', '1');
  };

  const removeOverlay = function(target) {
    if (target.hasClass("overlay")) {
      target.eq(0).css('opacity', '0')
    }
    $overlays.each((i, obj) => {
      $(obj).css("opacity", "0");
    })
  };

  const handleChildrenOverlay = function(target) {
    const overlay = target.parent("div");

    if (target.hasClass("overlay-text")) {

      if (overlay.css("opacity") === "0") {
        removeOverlay(target);
        overlay.css("opacity", "1")
      }
      else {
        overlay.css("opacity", '0');
      }
    }

    else if (overlay.css("opacity", "1")) {
      overlay.css("opacity", "0");
    }
  };

  const checkOverlay = function(target) {
    if (target.hasClass("overlay-text")) {
      handleChildrenOverlay(target)
    }

    else if (target.css("opacity") === '1') {
      removeOverlay(target);
    }

    else {
      removeOverlay(target);
      addOverlay(target);
    }
  };

  $tilesContainer.click((event) => {
    if (window.innerWidth > 768) {
      return;
    }
    let $target = $(event.target)
    checkOverlay($target);
  })

})();
