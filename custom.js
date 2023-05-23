let windowHeight, windowWidth

let cards = document.querySelectorAll('.cardItem img');
let buttonAll = document.querySelectorAll('button');
let pageNum = 0;

buttonAll.forEach(function (item, i) {
  gsap.from(item, .4, {
    top: 100,
    ease: Power3.easeInOut,
    delay: i * 0.1 + 1,
  })
})

// button click event
for (let i = 0; i < buttonAll.length; i++) {
  (function (index) {
    buttonAll[index].onclick = function () {
      pageNum = index;
      CARD_EFFECTS();
    }
  })(i);
}

gsap.set('section', { perspective: 800 })

const CARD_EFFECTS = () => {

  for (let i = 0; i < buttonAll.length; i++) {
    // all button remove active class
    buttonAll[i].classList.remove('active');
  }
  // active button
  buttonAll[pageNum].classList.add('active');
  gsap.killTweensOf(cards) 

  if (pageNum == 0) {
    // center cards
    cards.forEach(function (item, i) {
      console.log(i);
      gsap.to(item, 0.8, {
        top: windowHeight / 2 + (i * 10),
        left: windowWidth / 2 - (i * 90 - 180),
        transform: 'translate(-50%, -50%',
        ease: Power3.easeInOut,
        rotation: 0,
        delay: i * 0.1,
      })
    })
  } else if (pageNum == 1) {
    cards.forEach(function (item, i) {
      gsap.to(item, 0.8, {
        top: Math.random() * (windowHeight - 300) + 100,
        left: Math.random() * (windowWidth - 300) + 100,
        rotationX: 'random(-60, 60)',
        rotationY: 'random(-60, 60)',
        rotationZ: 'random(-90, 90)',
        ease: Power4.easeInOut,
        delay: 'random(0, .5)',
      })
    })
  } else if (pageNum == 2) {
    cards.forEach(function (item, i) {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 + i * 30 - 100,
        left: windowWidth / 2 - i * 80,
        rotationX: 0,
        rotationY: -10 * i,
        rotationZ: 20 * i,
        ease: Power4.easeInOut,
        delay: i * .15
      })
    })
  } else if (pageNum == 3) {
    cards.forEach(function (item, i){
      gsap.to(item, 0.8, {
        top: windowHeight / 2 + (i * 10),
        left: windowWidth / 2 - (i * 90 - 180),
        rotationX: 'random(-60, 60)',
        rotationY: 'random(-60, 60)',
        rotationZ: 'random(-10, 10)',
        ease: Power1.easeInOut,
        delay: 'random(0,.5)',
      })
    })
  }
}

// window resize
const RESIZE = () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  CARD_EFFECTS();
}

window.addEventListener('resize', function () {
  RESIZE();
});

RESIZE();
