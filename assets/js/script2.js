document.addEventListener('DOMContentLoaded', function () {
  let slideIndexS = 0,
    sliding = false;

  const fullpageInstance = new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: false,
    css3: true,
    controlArrows: false,
    afterSlideLoad: function (section, origin, destination, direction) {
      slideIndexS = destination.index + 1;
    },
    onLeave: function (origin, destination, direction) {
      console.log('Index: ' + origin.index + ' Slide Index: ' + slideIndexS);

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
  fullpageInstance.setScrollingSpeed(1500);
});

// // heading animation
// const heading = document.querySelector('.title');
// gsap.from(heading, {
//   opacity: 0,
//   y: -80,
//   stagger: 0.3,
//   duration: 1.5,
// });

// gsap.registerPlugin(ScrollTrigger);

// // set up full page scroll
// const sections = document.querySelectorAll('.section');
// const totalSections = sections.length;
// let currentSection = 0;

// function goToSection(index) {
//   gsap.to(window, {
//     scrollTo: { y: index * window.innerHeight },
//     duration: 0,
//     ease: 'none',
//   });
// }

// // setup ScrollTrigger
// ScrollTrigger.create({
//   snap: 1 / (totalSections - 1),
//   onSnap: (index) => {
//     currentSection = index;
//   },
// });

// // setup keybindings
// document.addEventListener('keydown', (e) => {
//   if (e.keyCode === 38 && currentSection > 0) {
//     goToSection(currentSection - 1);
//   } else if (e.keyCode === 40 && currentSection < totalSections - 1) {
//     goToSection(currentSection + 1);
//   }
// });

// const text1 = document.querySelector('.text1');
// const text2 = document.querySelector('.text2');
// const storySeperator = document.querySelector('.story-seperator');

// // animation for text1 and text2 when they are in view
// gsap.from(text1, {
//   opacity: 0,
//   y: -80,
//   stagger: 0.3,
//   duration: 1.5,
//   scrollTrigger: {
//     trigger: text1,
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// gsap.from(text2, {
//   opacity: 0,
//   y: 80,
//   stagger: 0.3,
//   duration: 1.5,
//   scrollTrigger: {
//     trigger: text2,
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// // animation for story seperator when it is in view
// gsap.from(storySeperator, {
//   x: -5000,
//   stagger: 0.3,
//   duration: 2,
//   scrollTrigger: {
//     trigger: storySeperator,
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// const whyUs = document.querySelector('.why span');
// const whyLi = document.querySelectorAll('.why li');

// // animation for why us section
// gsap.from(whyUs, {
//   opacity: 0,
//   y: -80,
//   stagger: 0.3,
//   duration: 1.5,
//   scrollTrigger: {
//     trigger: whyUs,
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// gsap.from(whyLi, {
//   opacity: 0,
//   y: -80,
//   stagger: 0.3,
//   duration: 1.5,
//   scrollTrigger: {
//     trigger: whyLi,
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// const speakerImg = document.querySelector('.speaker-img');
// const who = document.querySelector('.who-section span');
// const whoText = document.querySelector('.who-section p');

// // animation for who section, speaker image apearring first whith sclaing, then the who and who text with different delay nad animation
// gsap.from(speakerImg, {
//   opacity: 1,
//   scale: 0,
//   duration: 1.5,
//   delay: 1.5,
//   scrollTrigger: {
//     trigger: '.who',
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// gsap.from(who, {
//   opacity: 0,
//   y: -80,
//   stagger: 0.3,
//   duration: 1.5,
//   scrollTrigger: {
//     trigger: '.who',
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// gsap.from(whoText, {
//   opacity: 0,
//   y: -80,
//   stagger: 0.3,
//   duration: 1.5,
//   delay: 1,
//   scrollTrigger: {
//     trigger: '.who',
//     start: 'top 80%',
//     end: 'bottom 20%',
//     toggleActions: 'play none none reverse',
//   },
// });

// const span1 = document.querySelectorAll('.span1');
// const container = document.querySelector('.container-name');
// const textWidth = span1[0].offsetWidth;

// container.style.width = `${textWidth}px`;

// gsap.set(span1[1], { x: textWidth });
// gsap
//   .timeline({ repeat: -1 })
//   .to(span1[0], { x: -textWidth, duration: 10, ease: 'none' }, 0)
//   .to(span1[1], { x: 0, duration: 10, ease: 'none' }, 0)
//   .set(span1[0], { x: textWidth })
//   .to(span1[1], { x: -textWidth, duration: 10, ease: 'none' }, 10)
//   .to(span1[0], { x: 0, duration: 10, ease: 'none' }, 10);
