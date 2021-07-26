'use strict';

let firstImageElement = document.getElementById('first-img');

let secoundImageElement = document.getElementById('secound-img');

let therdImageElement = document.getElementById('therd-img');

let imgdiv = document.getElementById('images');

let btn = document.createElement("button");

let maxVote = 10;
let userVoteCounter = 0;

let firstImageIndex;
let secoundImageIndex;
let therdImageIndex;

function Prodect(name, src) {
    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;
    Prodect.prodects.push(this);

};

Prodect.prodects = [];

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

console.log(Prodect.prodects);

function getRandomeIndex() {
    return Math.floor(Math.random() * Prodect.prodects.length)
};

function renderTheImg() {
    firstImageIndex = getRandomeIndex();
    secoundImageIndex = getRandomeIndex();
    therdImageIndex = getRandomeIndex();

    while (firstImageIndex === secoundImageIndex || firstImageIndex === therdImageIndex || secoundImageIndex === therdImageIndex) {
        firstImageIndex = getRandomeIndex();
        secoundImageIndex = getRandomeIndex();
        therdImageIndex = getRandomeIndex();

    };
    firstImageElement.src = Prodect.prodects[firstImageIndex].src
    Prodect.prodects[firstImageIndex].shown++; 
    secoundImageElement.src = Prodect.prodects[secoundImageIndex].src
    Prodect.prodects[secoundImageIndex].shown++; 
    therdImageElement.src = Prodect.prodects[therdImageIndex].src
    Prodect.prodects[therdImageIndex].shown++; 

};
renderTheImg();
console.log(Prodect.prodects[therdImageIndex] );



imgdiv.addEventListener('click', userClick);

function userClick(event) {

    userVoteCounter++;

    if (userVoteCounter < maxVote) {
        if (event.target.id === 'first-img') {
            Prodect.prodects[firstImageIndex].votes++;
            renderTheImg();

        } else if (event.target.id === 'secound-img') {
            Prodect.prodects[secoundImageIndex].votes++;
            renderTheImg();
          

        } else if (event.target.id === 'therd-img') {
            Prodect.prodects[therdImageIndex].votes++;
            renderTheImg();
            
        }else {
            alert("Please choose one of the imeges")
            userVoteCounter--;

        };
        
    }else {
        
        btn.innerHTML = "ViewResults";
        btn.onclick = function showLest() {
            let list = document.getElementById('result-lest');

            for (let i = 0; i < Prodect.prodects.length; i++) {

                let li = document.createElement('li')
                list.appendChild(li);
                li.textContent = `${Prodect.prodects[i].name} has ${Prodect.prodects[i].votes} votes and shown ${Prodect.prodects[i].shown} times `
            };

            btn.removeEventListener('click', showLest);

            
        };
       
        document.body.appendChild(btn);
        imgdiv.removeEventListener('click', userClick);
    };

    
};



