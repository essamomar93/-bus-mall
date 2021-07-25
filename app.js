'use strict';

let firstImageElement = document.getElementById('first-img');

let secoundImageElement = document.getElementById('secound-img');

let therdImageElement = document.getElementById('therd-img');

// let shownImageElement=document.getElementById('images')

// console.log(shownImageElement,therdImageElement);

let maxVote = 25;
let userVoteCounter = 0;

let firstImageIndex;
let secoundImageIndex;
let therdImageIndex;

function Prodect(name, src) {
    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;
    prodects.push(this);

};

let prodects = [];

new Prodect('bag', 'img/bag.jpg');
new Prodect('banana', 'img/banana.jpg');
new Prodect('bathroom', 'img/bathroom.jpg');
new Prodect('boots', 'img/boots.jpg');
new Prodect('breakfast', 'img/breakfast.jpg');
new Prodect('bubblegum', 'img/bubblegum.jpg');
new Prodect('chair', 'img/chair.jpg');
new Prodect('cthulhu', 'img/cthulhu.jpg');
new Prodect('dog-duck', 'img/dog-duck.jpg');
new Prodect('dragon', 'img/dragon.jpg');
new Prodect('pen', 'img/pen.jpg');
new Prodect('pet-sweep', 'img/pet-sweep.jpg');
new Prodect('scissors', 'img/scissors.jpg');
new Prodect('shark', 'img/shark.jpg');
new Prodect('sweep', 'img/sweep.png');
new Prodect('tauntaun', 'img/tauntaun.jpg');
new Prodect('unicorn', 'img/unicorn.jpg');
new Prodect('water-can', 'img/water-can.jpg');
new Prodect('wine-glass', 'img/wine-glass.jpg');

console.log(prodects);

function getRandomeIndex() {
    return Math.floor(Math.random() * prodects.length)
};

//   console.log(getRandomeIndex());
function renderTheImg() {
    firstImageIndex = getRandomeIndex();
    secoundImageIndex = getRandomeIndex();
    therdImageIndex = getRandomeIndex();
    // console.log(firstImageIndex, secoundImageIndex, therdImageIndex);

    while (firstImageIndex === secoundImageIndex || firstImageIndex === therdImageIndex || secoundImageIndex === therdImageIndex) {
        firstImageIndex = getRandomeIndex();
        secoundImageIndex = getRandomeIndex();
        therdImageIndex = getRandomeIndex();

    };
    firstImageElement.src = prodects[firstImageIndex].src
    secoundImageElement.src = prodects[secoundImageIndex].src
    therdImageElement.src = prodects[therdImageIndex].src

    // console.log(target.id);
    // shownImageElement.src=prodects[images].src

};
renderTheImg();


let imgdiv = document.getElementById('images');
imgdiv.addEventListener('click', userClick);

function userClick(event) {

    userVoteCounter++;
    // console.log(event.target.id);

    if (userVoteCounter < maxVote) {
        if (event.target.id === 'first-img') {
            prodects[firstImageIndex].votes++;

        } else if (event.target.id === 'secound-img') {
            prodects[secoundImageIndex].votes++;
          

        } else if (event.target.id === 'therd-img') {
            prodects[therdImageIndex].votes++;
            
        }else {
            alert("Please choose one of the imeges")
            userVoteCounter--;

        };
        renderTheImg();

    // }else if (event.target.id === 'images') {
    //     prodects[firstImageIndex].shown++;
        
    }else {
        let btn = document.createElement("button");
        btn.innerHTML = "View Results";
        btn.onclick = function showLest() {
            let list = document.getElementById('result-lest');

            for (let i = 0; i < prodects.length; i++) {

                let li = document.createElement('li')
                list.appendChild(li);
                li.textContent = `${prodects[i].name} has ${prodects[i].votes} votes`
            };

        };
        document.body.appendChild(btn);
        imgdiv.removeEventListener('click', userClick);
    };

};


