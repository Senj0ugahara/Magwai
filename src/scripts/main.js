const cardsList = document.querySelector('.cards-list');
const getCardsBtn = document.querySelector('.cards__btn');


// Хранилище с карточками
const state = {
  cards: [],
  page: 1,
  more: true,
}

// Инициализация карточки
const createCard = card => `
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img${card.id}.jpg" alt="image on the tenth card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        ${card.id}
      </h4>
      <p class="card__descr card__descr_bold">
        ${card.title}
      </p>
      <p class="card__descr">
        ${card.body}
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia,</b> on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
`

// Отрисовка карточек в html
const fillCardsList = cards => {
  cardsList.innerHTML = defaultCard;

  if (cards.length) {
    cards.forEach(card => cardsList.innerHTML += createCard(card))
  }
}


// Метод клика по кнопке "Загрузить еще"
getCardsBtn.addEventListener('click', async () => {
  if (state.more) {
    await getCardsRequest();
    fillCardsList(state.cards);
    state.page++;

    if (state.page > 4) {
      state.more = false;
      return;
    }
  }
})

// Получения карточек с сервера
function getCardsRequest() {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${state.page}&_limit=5`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => res.json())
  .then((cards) => state.cards = state.cards.concat(cards))
}