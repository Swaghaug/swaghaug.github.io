// My own creationm, did not use any tutorial.
document.addEventListener('DOMContentLoaded',() => {

const grid = document.querySelector('.grid');
const grid2 = document.querySelector('.grid2');
const btn = document.getElementById("addbutton");
const typeBox = document.getElementById("type-box");
const errormsg = document.getElementById("errormsg");
btn.addEventListener('click',add);
document.addEventListener("keydown", checkKeyPress, false);

let imageArray = [
        {
            name: "Milk",
            img:"img/milk.png"
        },
        {
            name: "Eggs",
            img:"img/eggs.png"
        },
        {
            name: "Bread",
            img:"img/bread.png"
        },
        {
            name: "Bacon",
            img:"img/bacon.png"
        },
        {
            name: "Bananas",
            img:"img/banana.png"
        },
        {
            name: "Lettuce",
            img:"img/lettuce.png"
        },
        {
            name: "Apples",
            img:"img/apple.png"
        },
        {
            name: "Tomatoes",
            img:"img/tomato.png"
        },
        {
            name: "Onions",
            img:"img/onion.png"
        },
        {
            name: "Flour",
            img:"img/flour.png"
        },
        {
            name: "Beer",
            img:"img/beer.png"
        },
        {
            name: "Bell Pepper",
            img:"img/pepper.png"
        },
        ]

function setPictures() {
        for(let i = 0; i <imageArray.length; i++){
            var myImg = document.createElement('img');
            myImg.setAttribute('src', imageArray[i].img);
            myImg.setAttribute('width', "120");
            myImg.setAttribute('data-id',i);
            //So this creates a funciton for each image (i think) such that when 
            //clicked the name appears in the shopping list box.
            myImg.addEventListener('click', () => {
                typeBox.value = imageArray[i].name;
                btn.click();
            });
            grid2.appendChild(myImg);
        }   
    }

//use function when enter key is pressed
function checkKeyPress(key) {
        if(key.keyCode =="13")
        btn.click();
}

function add(){
        let card = document.createElement('div');
        card.setAttribute("class", "grid-item");
        if(typeBox.value===""){
                errormsg.textContent = "Please write in the textbox below before adding."
                typeBox.value = "";
        } else {
        card.innerText = "- "+typeBox.value;
        typeBox.value = "";
        errormsg.textContent = "";
        grid.appendChild(card);
        }
}


setPictures()
});


