'use strict';

let firstImageElement = document.getElementById('first-img');

let secoundImageElement = document.getElementById('secound-img');

let therdImageElement = document.getElementById('therd-img');

let imgdiv = document.getElementById('images');

let btn = document.getElementById("button");

let maxVote = 25;
let userVoteCounter = 0;

let firstImageIndex;
let secoundImageIndex;
let therdImageIndex;

let prodectsArr = [];

let prodectsVote = [];

let prodectsShow = [];

function Prodect(name, src) {
    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;

    Prodect.notRebetImg.push(this);

    Prodect.prodects.push(this);

    prodectsArr.push(this.name);

};


Prodect.notRebetImg = [];

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

// console.log(Prodect.prodects);

function ubdateStoreg() {

    let prodArr = JSON.stringify(Prodect.prodects);
    localStorage.setItem('prodect', prodArr);

};

function getRandomeIndex() {
    return Math.floor(Math.random() * Prodect.prodects.length)
};

function renderTheImg() {
    firstImageIndex = getRandomeIndex();
    secoundImageIndex = getRandomeIndex();
    therdImageIndex = getRandomeIndex();



    while (firstImageIndex === secoundImageIndex || firstImageIndex === therdImageIndex || secoundImageIndex === therdImageIndex || Prodect.notRebetImg.includes(firstImageIndex) || Prodect.notRebetImg.includes(secoundImageIndex) || Prodect.notRebetImg.includes(therdImageIndex)) {
        firstImageIndex = getRandomeIndex();
        secoundImageIndex = getRandomeIndex();
        therdImageIndex = getRandomeIndex();
    };

    Prodect.notRebetImg = [firstImageIndex, secoundImageIndex, therdImageIndex];


    firstImageElement.src = Prodect.prodects[firstImageIndex].src
    Prodect.prodects[firstImageIndex].shown++;
    secoundImageElement.src = Prodect.prodects[secoundImageIndex].src
    Prodect.prodects[secoundImageIndex].shown++;
    therdImageElement.src = Prodect.prodects[therdImageIndex].src
    Prodect.prodects[therdImageIndex].shown++;

};
renderTheImg();




// console.log(ubdateStoreg);
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

        } else {
            alert("Please choose one of the imeges")
            userVoteCounter--;

        }


    } else {



        btn.hidden = false;
        btn.addEventListener('click', showLest);

        function showLest() {
            let list = document.getElementById('result-lest');

            for (let i = 0; i < Prodect.prodects.length; i++) {

                let li = document.createElement('li')
                list.appendChild(li);
                li.textContent = `${Prodect.prodects[i].name} has ${Prodect.prodects[i].votes} votes and shown ${Prodect.prodects[i].shown} times `
            };
            btn.removeEventListener('click', showLest);
        };


        for (let i = 0; i < Prodect.prodects.length; i++) {
            prodectsVote.push(Prodect.prodects[i].votes);
            prodectsShow.push(Prodect.prodects[i].shown);


        };

        imgdiv.removeEventListener('click', userClick);

        ubdateStoreg();
        showChart();
    };
};

function getProdects() {

    let getVote = localStorage.getItem('prodect')

    let parsedArr = JSON.parse(getVote);

    if (parsedArr !== null) {

    Prodect.prodects = parsedArr;
    };

    };


    function showChart() {

        const data = {
            labels: prodectsArr,
            datasets: [{
                label: 'Votes',
                data: prodectsVote,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
            {
                label: 'Shown',
                data: prodectsShow,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }

            ]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        };


        var myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

    };



    function pugbombButtonHandler() {
        let pugbombButton = document.getElementById('pugbomb');
        pugbombButton.addEventListener('click', pugbombButtonHandler());
        alert('PUGBOMB!!!!');
    };

    getProdects();
