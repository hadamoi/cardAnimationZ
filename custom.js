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

}

const CARD_RESET = () => {
  cards.forEach(function (item, i) {
    console.log(i);
    gsap.to(item, 1, {
      left: windowWidth / 2 - (i * 60),
      top: windowHeight / 2.8 + (i * 10),
      ease: Power3.easeInOut,
      rotation: 0,
      delay: i * 0.16,
    })
  })
};

buttonRandom.addEventListener('click', function () { });
buttonReset.addEventListener('click', function () { });



window.addEventListener('resize', function () {
  RESIZE();
});


RESIZE();
