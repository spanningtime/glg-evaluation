'use strict';

$(document).ready(function() {
  $('.carousel').carousel();
});

const $tilesContainer = $('.tiles-container');
const $overlays = $('.overlay');

function addOverlay(target) {
  target.css('opacity', '1');
}

// Removes all overlays as well as the active overlay that is clicked on
function removeOverlay(target) {
  if (target.hasClass('overlay')) {
    target.eq(0).css('opacity', '0');
  }
  $overlays.each((i, obj) => {
    $(obj).css('opacity', '0');
  });
}

// Handles adding/removing overlay if click target is overlay text
function handleChildrenOverlay(target) {
  const overlay = target.parent('div');

  if (overlay.css('opacity') === '0') {
    removeOverlay(target);
    overlay.css('opacity', '1');
  }

  else {
    overlay.css('opacity', '0');
  }
}

// Checks click to see if target is the overlay-text or the overlay itself & calls appropriate functions
function checkOverlay(target) {
  if (target.hasClass('overlay-text')) {
    handleChildrenOverlay(target);
  }

  else if (target.css('opacity') === '1') {
    removeOverlay(target);
  }

  else {
    removeOverlay(target);
    addOverlay(target);
  }
}

/* click event for tile overlays */
$tilesContainer.on('click', (event) => {
  if (window.innerWidth > 768) {
    return;
  }
  const $target = $(event.target);
  checkOverlay($target);
});
