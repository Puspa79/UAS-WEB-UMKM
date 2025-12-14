class CardHandler {
    constructor(selector = '.card') {
        this.cards = [...document.querySelectorAll(selector)];
    }

    init = () => {
        this.cards.forEach(card =>
            card.addEventListener('click', () => this.activate(card))
        );
    };

    activate = (clickedCard) => {
        this.cards.forEach(card => {
            card.classList.remove('active');
            const title = card.querySelector('.judul');
            if (title) title.style.display = 'none';
        });

        clickedCard.classList.add('active');
        const title = clickedCard.querySelector('.judul');
        if (title) title.style.display = 'block';

        console.log(`Card aktif: ${title?.textContent}`);
    };
}

const handler = new CardHandler();
handler.init();
