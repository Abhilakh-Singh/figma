function expandCard(clickedCard) {
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('selected');
    card.querySelector('input[type="radio"]').checked = false;
    card.querySelector('.options')?.classList.add('hidden');
  });

  clickedCard.classList.add('selected');
  clickedCard.querySelector('input[type="radio"]').checked = true;
  clickedCard.querySelector('.options')?.classList.remove('hidden');

  const total = clickedCard.getAttribute('data-price');
  document.getElementById('total').textContent = (+total).toFixed(2);
}
