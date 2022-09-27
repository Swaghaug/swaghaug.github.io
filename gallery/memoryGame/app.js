document.addEventListener('DOMContentLoaded',() => {

    let cardArray = [
    {
        name: "Pikachu",
        img:"img/pika1.png"
    },
    {
        name: "Mewtwo",
        img:"img/mewtwo1.png"
    },
    {
        name: "Snorlax",
        img:"img/snor1.png"
    },
    {
        name: "Charmander",
        img:"img/char1.png"
    },
    {
        name: "Bulbasaur",
        img:"img/bulba1.png"
    },
    {
        name: "Squirtle",
        img:"img/squirt1.png"
    },
    {
        name: "Mew",
        img:"img/Mew1.png"
    },
    {
        name: "Goldeen",
        img:"img/gold1.png"
    },
    {
        name: "Pikachu",
        img:"img/pika1.png"
    },
    {
        name: "Mewtwo",
        img:"img/mewtwo1.png"
    },
    {
        name: "Snorlax",
        img:"img/snor1.png"
    },
    {
        name: "Charmander",
        img:"img/char1.png"
    },
    {
        name: "Bulbasaur",
        img:"img/bulba1.png"
    },
    {
        name: "Squirtle",
        img:"img/squirt1.png"
    },
    {
        name: "Mew",
        img:"img/Mew1.png"
    },
    {
        name: "Goldeen",
        img:"img/gold1.png"
    }
    ]
    
    cardArray.sort(() => 0.5 - Math.random());
    
    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    
    //Creating the card objects in html and setting attributes to make them fit the grid.
    function createBoard() {
        for(let i = 0; i <cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'img/pokeball.png');
            card.setAttribute('width', "100");
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }   
    }
    
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0]===cardsChosen[1]){
            cards[optionOneId].setAttribute('src', 'img/masterball.png');
            cards[optionTwoId].setAttribute('src', 'img/masterball.png');
            cardsWon.push(cardsChosen);
        }else {
            cards[optionOneId].setAttribute('src', 'img/pokeball.png');
            cards[optionTwoId].setAttribute('src', 'img/pokeball.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length*2;
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent = 'Congratulations, you caught them all!';
        }
    }
    
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length ===2){
            setTimeout(checkForMatch, 700);
        }
    }
    
    createBoard()
    
    })