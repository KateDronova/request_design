const userButton = document.getElementById('userInfo');
const userMenu = document.querySelector('.userMenu');

userButton.addEventListener('mouseover', () => {
  userMenu.classList.remove('hidden');
});
userButton.addEventListener('mouseout', () => {
  userMenu.classList.add('hidden');
});

function createElementWithClass(parentElem, tag, className, content) {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  if (content) {
    elem.append(content);
  }
  parentElem.append(elem);
  return elem;
}

fetch('./productCardsInfo.json')
  .then((response) => response.json())
  .then((data) =>
    data.map((item) => {
      const catalog = document.querySelector('.catalog');
      const card = createElementWithClass(catalog, 'div', 'catalog__productCard');

      createElementWithClass(card, 'p', 'catalog__index', item.index);
      const image = createElementWithClass(card, 'img', 'catalog__img');
      image.setAttribute('src', item.imgSrc);
      card.append(item.amount);
      createElementWithClass(card, 'p', 'h3', item.title);
    })
  );
