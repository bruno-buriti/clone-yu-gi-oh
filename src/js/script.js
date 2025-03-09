const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const cards = document.querySelectorAll('.card');
let selectedCard = 0;

function showSelectedCard(selectedCard) {
    cards[selectedCard].classList.add('selected');
}

function hideSelectedCard() {
    const selectedCard = document.querySelector('.selected');
    selectedCard.classList.remove('selected');
}

leftButton.addEventListener('click', function(){
    if(selectedCard === 0) return;
    hideSelectedCard();
    selectedCard--;
    showSelectedCard(selectedCard);
});

rightButton.addEventListener('click', function(){
    if(selectedCard === cards.length-1) return;
    hideSelectedCard();
    selectedCard++;
    showSelectedCard(selectedCard);
});
