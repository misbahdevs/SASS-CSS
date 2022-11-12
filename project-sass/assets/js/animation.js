gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
tl.from(".stagger1", {
  y: "-50",
  opacity: 0,
  stagger: 0.3,
  duration: 2,
  ease: Power2.easeOut,
});

tl.from(
  ".svg-hero",
  {
    y: "-50",
    opacity: 0,
    ease: Power2.easeOut,
    duration: 1,
  },
  "-=2.3"
);

gsap.from(".requare-anim", {
  scale: 0.1,
  stagger: 0.2,
  duration: 1,
  ease: Back.easeOut.config(1),
});

gsap.from(".stagger2", {
  scrollTrigger: {
    trigger: ".stagger2",
    start: "top bottom",
  },
  y: "50",
  opacity: 0,
  stagger: 0.3,
  duration: 1,
});

gsap.from(".stagger3", {
  scrollTrigger: {
    trigger: ".stagger3",
    start: "top bottom",
  },
  y: "50",
  opacity: 0,
  stagger: 0.6,
  duration: 1,
});

gsap.from(".stagger4", {
  scrollTrigger: {
    trigger: ".stagger4",
    start: "top bottom",
  },
  y: "50",
  opacity: 0,
  stagger: 0.7,
  duration: 1,
});
