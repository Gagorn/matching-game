import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
    window.cardFrontBack = {};
    window.cardFrontBack.openedCards = [];
  
    window.cardFrontBack.handleClick = (event) => {
      const $origin = event.target;
      const $cardFrontBack = $origin.closest('.card-front-back');
  
      if ($cardFrontBack.classList.contains('-active')) {
        return; 
      }
      if (window.cardFrontBack.openedCards.length === 2) {
        
        window.cardFrontBack.openedCards.forEach((cardFrontBack) => {
          cardFrontBack.classList.remove('-active');
        });
        window.cardFrontBack.openedCards = [];
      }
  
      $cardFrontBack.classList.add('-active');
      window.cardFrontBack.openedCards.push($cardFrontBack);
  
      
      if (window.cardFrontBack.openedCards.length === 2) {
        const [card1, card2] = window.cardFrontBack.openedCards;
        if (card1.dataset.valor !== card2.dataset.valor) {
          setTimeout(() => {
            window.cardFrontBack.openedCards.forEach((card) => {
              card.classList.remove('-active');
            });
            window.cardFrontBack.openedCards = [];
          }, 1000);
        }
      }
    }

return `
<article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
<div class="card -front">
${CardGame()}
</div>
<div class="card -back">
${CardGame("raze-icon", "Icone da Raze")}
<div class="card -back">
</article>
`
}

export default CardFrontBack;
