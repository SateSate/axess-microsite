gsap.registerPlugin(ScrollTrigger);

// animate title .title
gsap.from('.title', {
  opacity: 0,
  duration: 2,
  y: -80,
  ease: 'power4.out',
});

// what heading
gsap.from('.text-what', {
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


let sections = gsap.utils.toArray('.slide');
let linePaths = ['#path1', '#path2', '#path3'];

const scrollDuration = 3000;

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    pin: '.h-container',
    pinSpacing: true,
    scrub: 1,
    end: `+=${scrollDuration}`,
  },
});

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



const textOverAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    scrub: 1,
    start: 'bottom right',
    end: `+=${scrollDuration}`,
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

//LINE SECTION

gsap.to('.line-container', {
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    scrub: 2,
    start: 'top center',
    endTrigger: '.campaign',
    end: 'center bottom',
    ease: Power4.easeOut,
  },
  width: '300vw',
});
