window.onload = function () {
  window.scrollTo(0, 0);
};

window.onresize = function () {
  location.reload();
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
    trigger: '#reveal-what',
    start: 'center center',
    end: 'center 25%',
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
    trigger: '#reveal-goal',
    start: window.innerWidth + ' center',
    end: window.innerWidth + ' 25%',
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
    trigger: '#reveal-roadmap',
    start: window.innerWidth + ' center',
    end: window.innerWidth + ' 25%',
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
  //HORIZONTAL LINE SECTION
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.horizontal-scroll',
        scrub: 1,
        start: 'top top',
        end: '+=' + window.innerWidth * 2,
        ease: 'none',
      },
    })
    .to('.line-container', { width: window.innerWidth })
    .to('.line-container', { width: window.innerWidth * 1.5 })
    .to('.line-container', { width: window.innerWidth * 1.75 })
    .to('.line-container', { width: window.innerWidth * 2.25 })
    .to('.line-container', { width: window.innerWidth * 2.75 })
    .to('.line-container', { width: window.innerWidth * 3 })
    .to('.line-container', { width: window.innerWidth * 3.5 })
    .to('.line-container', { width: window.innerWidth * 4 })
    .to('.line-container', { width: window.innerWidth * 4.5 })
    .to('.line-container', { width: window.innerWidth * 5 })
    .to('.line-container', { width: window.innerWidth * 5.75 });

  let sections = gsap.utils.toArray('.slide');
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1 / 2),
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal-scroll',
      pin: true,
      scrub: 1,
      end: '+=' + window.innerWidth * 2,
      start: 'top top',
    },
  });

  gsap.to('.unlimited-img', {
    xPercent: -50 * (sections.length - 2),
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal-scroll',
      scrub: 1,
      end: '+=' + window.innerWidth * 2,
      start: 'top top',
    },
  });
} else {
  //HORIZONTAL LINE SECTION
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.horizontal-scroll',
        scrub: 1,
        start: 'top top',
        end: '+=' + window.innerWidth,
        ease: 'none',
      },
    })
    .to('.line-container', { width: window.innerWidth })
    .to('.line-container', {
      width: window.innerWidth + window.innerWidth * 0.5,
    })
    .to('.line-container', {
      width: window.innerWidth * 1.5 + window.innerWidth,
    });

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
}

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
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.roadmap-cards',
      scrub: 1,
      start: 'top center',
      end: 'center top',
      ease: Power1.easeOut,
    },
  })
  .to('.roadmap-line-container', {
    height: '25%',
  })
  .to('.roadmap-line-container', {
    height: '35%',
  })
  .to('.roadmap-line-container', {
    height: '45%',
  })
  .to('.roadmap-line-container', {
    height: '55%',
  })
  .to('.roadmap-line-container', {
    height: '65%',
  })
  .to('.roadmap-line-container', {
    height: '75%',
  })
  .to('.roadmap-line-container', {
    height: '100%',
  });

gsap.to('.footer-logo-hide', {
  xPercent: '150',
  scrollTrigger: {
    trigger: '.marquee',
    scrub: 1,
    start: 'top center',
    end: 'center center',
    ease: Power1.easeOut,
  },
});
