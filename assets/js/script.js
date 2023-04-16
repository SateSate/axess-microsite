document.addEventListener('DOMContentLoaded', function () {
  let slideIndexS = 0,
    sliding = false;

  const fullpageInstance = new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: false,
    css3: true,
    controlArrows: false,
    anchors: ['banner', 'what', 'unlimited', 'why', 'who', 'footer'],
    scrollOverflow: true,
    scrollOverflowOptions: {
      scrollbars: false,
      mouseWheel: true,
      hideScrollbarsOnMobile: true,
      interactiveScrollbars: true,
      fadeScrollbars: true,
    },
    // add scrollOverflow only to the sections with the attribute scrollable
    scrollOverflowReset: true,
    scrollOverflowResetKey: 'scrollable',
    afterLoad: function (origin, destination, direction) {
      // get the video element
      const video = destination.item.querySelector('video');

      if (video) {
        // play the video
        video.play();
      }
    },
    afterSlideLoad: function (section, origin, destination, direction) {
      slideIndexS = destination.index + 1;
    },
    onLeave: function (origin, destination, direction) {
      // get the video element
      const video = origin.item.querySelector('video');

      if (video) {
        // pause the video
        video.pause();
      }

      const currentSection = origin.item; // Get the current section element

      if (currentSection.hasAttribute('data-horizontal-section') && !sliding) {
        const slides = currentSection.querySelectorAll('.slide'); // Get all slides in the current section
        const totalSlides = slides.length; // Get the total number of slides

        if (direction === 'down' && slideIndexS < totalSlides) {
          fullpageInstance.moveSlideRight();
          return false;
        } else if (direction === 'up' && slideIndexS > 1) {
          fullpageInstance.moveSlideLeft();
          return false;
        }
      } else if (sliding) {
        return false;
      }
    },
  });
  fullpageInstance.setScrollingSpeed(2000);
});

function marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;

  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener('load', marquee('.marquee', 0.5));
window.addEventListener('load', marquee('.marquee-bottom', 0.5));
