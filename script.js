const container = document.querySelector('.container');
let expandedCard = document.querySelector('.card.active');

const showCard = function (e) {
  const selectedCard = e.target.closest('.card');
  const isActive = selectedCard.classList.contains('active');

  if (isActive) return;

  selectedCard.classList.add('active');

  expandedCard.classList.remove('active');

  expandedCard = selectedCard;
};

container.addEventListener('click', showCard);
