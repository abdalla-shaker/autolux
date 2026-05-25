gsap.registerPlugin(SplitText);

gsap.from(header, { delay: 0.5, y: -500 });

const split = SplitText.create(".hero-overlay-text", {
  type: "chars",
});

const splitWords = SplitText.create(".hero-text .primary-header", {
  type: "words",
});

const splitLines = SplitText.create(".hero-text p", {
  type: "lines",
});

const animationSettings = { duration: 0.5, y: 50, opacity: 0, stagger: 0.5 };

gsap.from(split.chars, {
  delay: 0.7,
  ...animationSettings,
});

gsap.from(splitWords.words, {
  delay: 1,
  ...animationSettings,
});

gsap.from(splitLines.lines, {
  delay: 2,
  ...animationSettings,
});

gsap.from(".hero .primary-button", {
  delay: 2.5,
  ...animationSettings,
});
