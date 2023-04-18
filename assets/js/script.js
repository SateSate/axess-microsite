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

window.addEventListener('load', marquee('.marquee', 0.5));
window.addEventListener('load', marquee('.marquee-bottom', 0.5));

gsap.registerPlugin(ScrollTrigger);

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

// animate title .title
gsap.from('.title', {
  opacity: 0,
  duration: 2,
  y: -80,
  ease: 'power4.out',
});

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-container',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
  },
});

tl.from(text1, {
  opacity: 0,
  duration: 2,
  y: -80,
  ease: 'power4.out',
});

tl.from(text2, {
  opacity: 0,
  duration: 2,
  y: -50,
  ease: 'power4.out',
});

const why = document.querySelector('.why');

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.why',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
  },
});

tl2.from(why, {
  opacity: 0,
  duration: 2,
  y: -80,
  ease: 'power4.out',
});

const who = document.querySelector('.who');
const dateLocation = document.querySelector('.date-location');

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.who',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
  },
});

tl3.from(who, {
  opacity: 0,
  duration: 2,
  y: -80,
  ease: 'power4.out',
});

tl3.from(dateLocation, {
  opacity: 0,
  duration: 2,
  y: -50,
  ease: 'power4.out',
});
