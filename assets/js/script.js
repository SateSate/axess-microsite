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

//HORIZONTAL LINE SECTION
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.horizontal-scroll',
      scrub: 1,
      start: 'top top',
      end: '+=' + window.innerWidth,
      ease: 'none',
      markers: true,
    },
  })
  .to('.line-container', { width: window.innerWidth })
  .to('.line-container', { width: window.innerWidth + window.innerWidth * 0.5 })
  .to('.line-container', {
    width: window.innerWidth * 1.5 + window.innerWidth,
  });

//HORIZONATL SCROLL SECTIONS
let sections = gsap.utils.toArray('.slide');
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    pin: true,
    scrub: 1,
    end: '+=' + window.innerWidth,
    start: 'top top',
  },
});

gsap.to('.unlimited-img', {
  xPercent: -100 * (sections.length - 2),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    scrub: 1,
    end: '+=' + window.innerWidth,
    start: 'top top',
  },
});

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

//VERTICAL LINE SECTION
gsap.to('.roadmap-line-container', {
  scrollTrigger: {
    trigger: '.roadmap-cards',
    scrub: 1,
    start: 'top center',
    end: 'center bottom',
    endTrigger: '.campaign-h1',
    ease: Power4.easeOut,
  },
  height: '100%',
});
