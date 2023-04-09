// Animate the heading
const heading = document.querySelector('.title');
gsap.from(heading, {
  opacity: 0,
  y: -80,
  stagger: 0.3,
  duration: 1.5,
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.vertical .vertical-section');

// Animate the vertical sections
gsap.to(sections, {
  yPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.vertical',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => '+=' + document.querySelector('.vertical').offsetWidth,
  },
});

// const horizontalSections = gsap.utils.toArray('.horizontal-section');
// // Animate the horizontal sections
// gsap.to('.horizontal-section', {
//   xPercent: -100 * (horizontalSections.length - 1),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.horizontal-container',
//     pin: true,
//     scrub: 1,
//     snap: 1 / (horizontalSections.length - 1),
//     end: () =>
//       '+=' + document.querySelector('.horizontal-container').offsetWidth,
//   },
// });
