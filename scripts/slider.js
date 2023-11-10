const sliderImagesSrc = [
  './assets/images/best-laptop.png',
  './assets/images/best-laptop2.png',
  './assets/images/best-laptop3.png',
  './assets/images/best-laptop4.png',
  './assets/images/best-laptop5.png',
];

function addSlider() {
  const image = document.querySelector('.slider__bestProduct');
  const sliderButton = document.querySelector('.slider__longArrow');
  const indicators = document.querySelectorAll('.slider__circle');
  let i = 0;

  function clickButton() {
    
    if (i < sliderImagesSrc.length - 1) {
      image.setAttribute('src', sliderImagesSrc[++i]);
      indicators[i - 1].classList.remove('active');
      indicators[i].classList.add('active');
    } else {
      i = 0;
      image.setAttribute('src', sliderImagesSrc[i]);
      indicators[sliderImagesSrc.length - 1].classList.remove('active');
      indicators[i].classList.add('active');
    }

    image.style.animation = 'switchSlider 700ms ease-out';
    image.addEventListener('animationend', () => {
      image.style.animation = '';
    });
  }
  sliderButton.addEventListener('click', clickButton);
}

addSlider();
