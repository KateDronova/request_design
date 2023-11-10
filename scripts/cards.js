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
      const card = createElementWithClass(
        catalog,
        'div',
        'catalog__productCard'
      );

      createElementWithClass(card, 'p', 'catalog__index', item.index);
      const image = createElementWithClass(card, 'img', 'catalog__img');
      image.setAttribute('src', item.imgSrc);
      card.append(item.amount);
      createElementWithClass(card, 'p', 'h3', item.title);
    })
  );

fetch('./newsData.json')
  .then((response) => response.json())
  .then((data) =>
    data.map((item) => {
      const container = document.querySelector('.news__main');
      const card = createElementWithClass(container, 'div', 'news__card');

      createElementWithClass(card, 'img', 'news__img').setAttribute(
        'src',
        item.imgSrc
      );
      createElementWithClass(card, 'img', 'news__supportingImg').setAttribute(
        'src',
        './assets/images/supporting1.png'
      );
      createElementWithClass(card, 'img', 'news__supportingImg2').setAttribute(
        'src',
        './assets/images/supporting2.png'
      );
      createElementWithClass(card, 'p', 'h3', item.title).classList.add(
        'news__title'
      );
      createElementWithClass(card, 'p', 'news__decription', item.description);

      const button = createElementWithClass(card, 'button', 'news__readMore');
      createElementWithClass(button, 'img').setAttribute(
        'src',
        './assets/icons/→.svg'
      );

      const dateContainer = createElementWithClass(card, 'div', 'news__date');
      createElementWithClass(dateContainer, 'p', 'news__dateDay', item.day);
      createElementWithClass(dateContainer, 'p', 'news__dateMonth', item.month);
    })
  );
