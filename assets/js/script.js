window.onload = function () {
  window.scrollTo(0, 0);
};

gsap.registerPlugin(ScrollTrigger);

// animate title .title
gsap.from('.title', {
  opacity: 0,
  duration: 2,
  y: -80,
  ease: 'power4.out',
});

// what heading
gsap.from('#what', {
  scrollTrigger: {
    trigger: '.story-container',
    start: 'center center',
    end: 'bottom center',
    scrub: 1,
    markers: true,
  },
  opacity: 0,
  duration: 2,
  y: -50,
  ease: 'power4.out',
});

// goal heading
gsap.from('#heading-goal', {
  scrollTrigger: {
    trigger: '#goal',
    start: 'top center',
    end: 'center center',
    scrub: 1,
  },
  opacity: 0,
  duration: 2,
  y: -50,
  ease: 'power4.out',
});

// roadmap heading
gsap.from('#heading-roadmap', {
  scrollTrigger: {
    trigger: '#roadmap',
    start: 'top center',
    end: 'center center',
    scrub: 1,
  },
  opacity: 0,
  duration: 2,
  y: -50,
  ease: 'power4.out',
});
// scroll from nav
const navLinks = document.querySelectorAll('.nav-link, .links a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    const distance = target.offsetTop - window.scrollY;
    window.scrollTo({
      top: window.scrollY + distance,
      behavior: 'smooth',
    });
  });
});
const isMobile = window.matchMedia(
  'only screen and (max-width: 768px)'
).matches;

if (isMobile) {
  //ANIMATION FOR MOBILE ONLY
} else {
  //ANIMATIONS FOR DESKTOP ONLY

  //HORIZONTAL LINE SECTION
  gsap.to('.line-container', {
    scrollTrigger: {
      trigger: '.horizontal-scroll',
      scrub: 2,
      start: 'top center',
      endTrigger: '.body-content-goal',
      end: 'center bottom',
      ease: Power4.easeOut,
    },
    width: '300vw',
  });
}
//HORIZONATL SCROLL SECTIONS
let sections = gsap.utils.toArray('.slide');
const scrollDuration = 3000;
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    pin: '.h-container',
    pinSpacing: false,
    scrub: 1,
    endTrigger: '.body-content-goal',
    end: 'top bottom',
  },
});
const textOverAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    scrub: 1,
    start: 'bottom right',
    endTrigger: '.body-content-goal',
    end: 'top bottom',
  },
});

textOverAnimation.fromTo(
  '.unlimited-img',
  { xPercent: 0 },
  { xPercent: -100 * (sections.length - 2), ease: 'none' }
);
//CAMPAIGN SECTION

gsap.timeline({
  scrollTrigger: {
    trigger: '.campaign-h1-container',
    start: 'center center',
    end: '400% bottom',
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});
