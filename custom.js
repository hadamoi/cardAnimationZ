let windowHeight, windowWidth

let cards = document.querySelectorAll('.cardItem img');
let buttonRandom = document.querySelectorAll('button')[0];
let buttonReset = document.querySelectorAll('button')[1];

const RESIZE = () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  CARD_RESET()
}

const CARD_RANDOM = () => {
  cards.forEach(function (item, i) {
    gsap.to(item, 1, {
      left: Math.random() * windowWidth,
      top: Math.random() * windowHeight,
      rotation: Math.random() * 180,
      ease: Power4.easeInOut,
      delay: i * 0.1,
    })
  })
}

const CARD_RESET = () => {
  cards.forEach(function (item, i) {
    console.log(i);
    gsap.to(item, 0.8, {
      left: windowWidth / 2 - (i * 90 - 180),
      top: windowHeight / 2 + (i * 10),
      transform: 'translate(-50%, -50%',
      ease: Power3.easeInOut,
      rotation: 0,
      delay: i * 0.12,
    })
  })
};

window.addEventListener('resize', function () {
  RESIZE();
});

buttonRandom.addEventListener('click', function (event) {
  CARD_RANDOM();
});

buttonReset.addEventListener('click', function (event) {
  CARD_RESET();
});

RESIZE();
