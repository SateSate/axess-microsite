// gsap animations

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

const scrollContainer = document.querySelector('.scroll-container');
const verticalSections = gsap.utils.toArray('.vertical .vertical-section');
const horizontalSections = gsap.utils.toArray('.horizontal-section');
