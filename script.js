const userButton = document.getElementById('userInfo');
const userMenu = document.querySelector('.userMenu');

userButton.addEventListener('mouseover', () => {
  userMenu.classList.remove('hidden');
})
userButton.addEventListener('mouseout', () => {
  userMenu.classList.add('hidden');
})
