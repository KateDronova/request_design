function addUserInfoPopup() {
  const userButton = document.getElementById('userInfo');
  const userMenu = document.querySelector('.userMenu');

  userButton.addEventListener('mouseover', () => {
    userMenu.classList.remove('hidden');
  });
  userButton.addEventListener('mouseout', () => {
    userMenu.classList.add('hidden');
  });
}
addUserInfoPopup();

const burger = document.querySelector('.burger');
const topBurgerLine = document.querySelector('.burger__hr_top');
const middleBurgerLine = document.querySelector('.burger__hr_middle');
const bottomBurgerLine = document.querySelector('.burger__hr_bottom');

const burgerMenu = document.querySelector('.burger__menu');
const burgerMenuItems = document.querySelectorAll('.burger__menuItem');
const shadow = document.querySelector('.shadow');

function openBurgerMenu() {
  document.body.style.overflow = 'hidden';

  topBurgerLine.classList.add('rotateTopLine');
  middleBurgerLine.classList.add('swipe');
  middleBurgerLine.classList.add('hidden');
  bottomBurgerLine.classList.add('rotateBottomLine');

  burgerMenu.classList.remove('hidden');
  shadow.classList.remove('hidden');
  shadow.addEventListener('click', closeBurgerMenu);
}

function closeBurgerMenu() {
  document.body.style.overflow = '';

  topBurgerLine.classList.remove('rotateTopLine');
  middleBurgerLine.classList.remove('swipe');
  middleBurgerLine.classList.remove('hidden');
  bottomBurgerLine.classList.remove('rotateBottomLine');

  burgerMenu.classList.add('hidden');
  shadow.classList.add('hidden');
}

for (let menuItem of burgerMenuItems) {
  menuItem.addEventListener('click', closeBurgerMenu);
}

burger.addEventListener('click', () => {
  if (burgerMenu.classList.contains('hidden')) {
    openBurgerMenu();
  } else {
    closeBurgerMenu();
  }
});
