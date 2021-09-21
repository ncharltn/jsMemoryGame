const cardArray = [
    {
        name: 'articuno',
        img: 'images/Articuno.png'
    },
    {
        name: 'articuno',
        img: 'images/Articuno.png'
    },
    {
        name: 'breloom',
        img: 'images/Breloom.png'
    },
    {
        name: 'breloom',
        img: 'images/Breloom.png'
    },
    {
        name: 'charizard',
        img: 'images/Charizard.png'
    },
    {
        name: 'charizard',
        img: 'images/Charizard.png'
    },
    {
        name: 'glalie',
        img: 'images/Glalie.png'
    },
    {
        name: 'glalie',
        img: 'images/Glalie.png'
    },
    {
        name: 'huntail',
        img: 'images/Huntail.png'
    },
    {
        name: 'huntail',
        img: 'images/Huntail.png'
    },
    {
        name: 'infernape',
        img: 'images/Infernape.png'
    },
    {
        name: 'infernape',
        img: 'images/Infernape.png'
    },
    {
        name: 'lapras',
        img: 'images/Lapras.png'
    },
    {
        name: 'lapras',
        img: 'images/Lapras.png'
    },
    {
        name: 'mew',
        img: 'images/Mew.png'
    },
    {
        name: 'mew',
        img: 'images/Mew.png'
    },
    {
        name: 'moltres',
        img: 'images/Moltres.png'
    },
    {
        name: 'moltres',
        img: 'images/Moltres.png'
    },
    {
        name: 'pikachu',
        img: 'images/Pikachu.png'
    },
    {
        name: 'pikachu',
        img: 'images/Pikachu.png'
    },
    {
        name: 'shuckle',
        img: 'images/Shuckle.png'
    },
    {
        name: 'shuckle',
        img: 'images/Shuckle.png'
    },
    {
        name: 'swampert',
        img: 'images/Swampert.png'
    },
    {
        name: 'swampert',
        img: 'images/Swampert.png'
    },
    {
        name: 'umbreon',
        img: 'images/Umbreon.png'
    },
    {
        name: 'umbreon',
        img: 'images/Umbreon.png'
    },
    {
        name: 'vileplume',
        img: 'images/Vileplume.png'
    },
    {
        name: 'vileplume',
        img: 'images/Vileplume.png'
    },
]


cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const displayResult = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// create your board

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/Pokeball.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// Check for matches

function checkForMatch () {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You caught a Pokemon!')
        // cards[optionOneId].setAttribute('src', 'images/Blank.png')
        // cards[optionTwoId].setAttribute('src', 'images/Blank.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/Pokeball.png')
        cards[optionTwoId].setAttribute('src', 'images/Pokeball.png')
        alert('Oh no! The Pokemon got away!')
    }
    cardsChosen = []
    cardsChosenId = []
    displayResult.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        displayResult.textContent = 'Congratulations! You caught them all!'
    }
}

// Flip Cards
function flipCard () {
    if (this.src.includes("images/Pokeball.png")) {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
}
 
createBoard();