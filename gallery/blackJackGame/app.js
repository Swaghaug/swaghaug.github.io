// A image library using images to display the cards is needed to run the game properly (). 
// This library must have images on the form #value_of_#Suit.png


let addButt = document.getElementById("sum-el");
let addButtAI = document.getElementById("sumAI-el");
let dispError = document.getElementById("error")
let balanceBox = document.getElementById("balance")
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let scorePlayer = 0;
let scoreAI = 0;
let suit = "";
let card = "";
let value = 0;
let valueAI = 0;
let clicks = 2;
let clicksAI = 0;
let points = 0;
let balance = 100;
let bet = parseInt(document.getElementById("demo").textContent);
let acesCount =0;

//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//11 being the max value, 2 the min value of cards
function getRandomCard() {
    let randomCard = Math.round(Math.random() * (11 - 1) + 1);
    switch (randomCard) {
        case 1:
            acesCount +=1;
            card = "ace";
            value = 11;
            return card;
        case 2:
            card = "2";
            value = 2;
            return card;
        case 3:
            card = "3";
            value = 3;
           return card;
        case 4:
            card = "4";
            value = 4;
            return card;
        case 5:
            card = "5";
            value = 5;
            return card;
        case 6:
            card = "6";
            value = 6;
            return card;
        case 7:
            card = "7";
            value = 7;
            return card;
        case 8:
            card = "8";
            value = 8;
            return card; 
        case 9:
            card = "9";
            value = 9;
            return card;
        case 10:
            card = "10";
            value = 10;
            return card;
        case 11:
            card = "jack";
            value = 10;
            return card;        
        case 12:
            card = "queen";
            value = 10;
            return card;
        case 13:
            card = "king";
            value = 10;
            return card;
      }
  }

function getRandomSuit() {
    return Math.random() * (4 - 1) + 1;
  }

function getRandomSuit2(){
    let suitGen = Math.round(Math.random() * (4 - 1) + 1);
    switch (suitGen) {
        case 1:
          suit = "hearts";
          return suit;
        case 2:
          suit = "diamonds";
          return suit;
        case 3:
           suit = "clubs";
           return suit;
        case 4:
          suit = "spades";
          return suit;
      }
}

function deal(){
    bet = parseInt(document.getElementById("demo").textContent)
    balance = balance - bet
    balanceBox.innerHTML = `Balance: ${balance}`;
    scorePlayer = 0;
    scoreAI = 0;
    value = 0;
    valueAI = 0;
    clicks = 2;
    clicksAI = 0;
    points = 0;
    acesCount =0;
    addButtAI.textContent = `AI score is: ${scoreAI}`;
    document.getElementById("imageAI_1").src=`img/red_joker.png`;
    document.getElementById("imageAI_2").src=`img/red_joker.png`;
    document.getElementById("imageAI_3").src=``;
    document.getElementById("imageAI_4").src=``;
    document.getElementById("imageAI_5").src=``;
    document.getElementById("image_3").src=``;
    document.getElementById("image_4").src=``;
    document.getElementById("image_5").src=``;
    dispError.textContent = "";
    let firstCard = getRandomCard();
    scorePlayer = value;
    let firstSuit = getRandomSuit2();
    let secondCard = getRandomCard();
    scorePlayer += value;
    let secondSuit = getRandomSuit2();
    document.getElementById("image_1").src=`img/${firstCard}_of_${firstSuit}.png`;
    document.getElementById("image_2").src=`img/${secondCard}_of_${secondSuit}.png`;
    addButt.textContent = `Your score is: ${scorePlayer}`;
}

function draw() {
    if (scorePlayer===0) {
        dispError.textContent = "Please deal initial cards before hitting.";
      } else {
            clicks +=1
            let thirdCard = getRandomCard(),thirdSuit = getRandomSuit2();
            document.getElementById(`image_${clicks}`).src=`img/${thirdCard}_of_${thirdSuit}.png`;
            scorePlayer += value;
            addButt.textContent = `Your score is: ${scorePlayer}`;
        }
    if (scorePlayer === 21 || clicks ===5) {
        dispError.textContent = "Congratulations, you win!";
        balance = balance+2*bet;
        balanceBox.innerHTML = `Balance: ${balance}`;
    } 
    if (scorePlayer > 21) {
        if(scorePlayer-10*acesCount<21){
            scorePlayer =scorePlayer-10*acesCount;
            acesCount -=1;
            addButt.textContent = `Your score is: ${scorePlayer}`;
        } else {
            dispError.textContent = "You are bust! Play again?!?";
        }

    }       
}

function forLoop(){
    acesCount=0;
    for (let i = 0; i < 5; i++) {
        clicksAI +=1
        let thirdCard = getRandomCard(),thirdSuit = getRandomSuit2();
        document.getElementById(`imageAI_${clicksAI}`).src=`img/${thirdCard}_of_${thirdSuit}.png`;
        scoreAI += value;
        addButtAI.textContent = `AI score is: ${scoreAI}`;
        if(scoreAI>21){
            if(acesCount>0){
                scoreAI =scoreAI-10*acesCount;
                acesCount -=1;
            }else{
                dispError.textContent = "Congratulations, you win!";
                balance = balance+2*bet;
                balanceBox.innerHTML = `Balance: ${balance}`;
                break;
            }
        } else if(scoreAI>=scorePlayer || clicksAI===5){
            dispError.textContent = "AI wins! Play again?";
            break;
        }
    }
}

function game() {
   forLoop()
}

function placeBet() {
    output = document.getElementById("demo").textContent
    
}


    //document.getElementById(`image_AI${clicksAI}`).src=``;