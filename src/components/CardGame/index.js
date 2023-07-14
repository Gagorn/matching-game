import "./style.css";
function CardGame(icon = "valorant-icon", alt = "Logo do Valorant") {
    return `
    <article class="card-game">
    <img src="images/${icon}.png" alt="${alt}">
    </article>
    `;
    }

    export default CardGame;