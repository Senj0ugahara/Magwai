window.addEventListener('DOMContentLoaded', function() {
  cardsList.innerHTML = defaultCard;
})

// Загрузка дефолтных карточек
const defaultCard = `
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img1.jpg" alt="image on the first card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img2.jpg" alt="image on the second card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img3.jpg" alt="image on the third card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img4.jpg" alt="image on the fourth card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img5.jpg" alt="image on the fifth card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img6.jpg" alt="image on the sixth  card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img7.jpg" alt="image on the seventh card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img8.jpg" alt="image on the eighth card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img9.jpg" alt="image on the ninth  card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia</b>, on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
  <li class="cards-item card">
    <div class="card__header">
      <img src="resources/images/cards/card-img10.jpg" alt="image on the tenth card">
    </div>
    <div class="card__body">
      <h4 class="card__heading">
        Bridge
      </h4>
      <p class="card__descr card__descr_bold">
        How to increase your productivity with a Music
      </p>
      <p class="card__descr">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
      </p>
      <p class="card__posted">
        Posted by <b>Eugenia,</b> on <span class="card__posted_date">July  24, 2019</span>
      </p>
      <button class="btn-reset card__btn">Continue reading</button>
    </div>
  </li>
`