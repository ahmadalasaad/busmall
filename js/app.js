const parent = document.getElementById('sec-one');
const rightImage = document.getElementById('right-image');
const leftImage = document.getElementById('left-image');
const midImage = document.getElementById('mid-image');

const maxAttempts = 25;
let counter = 0;

let allName = [];
let allVote = [];
let allShown = [];
function Product(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.time = 0;
    Product.all.push(this);
    allName.push(this.name);
}
Product.all = [];


new Product('bag', 'images/bag.jpg');
new Product('banana', 'images/banana.jpg');
new Product('bathroom', 'images/bathroom.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg');
new Product('bubblegum', 'images/bubblegum.jpg');
new Product('chair', 'images/chair.jpg');
new Product('cthulhu', 'images/cthulhu.jpg');
new Product('dog-duck', 'images/dog-duck.jpg');
new Product('dragon', 'images/dragon.jpg');
new Product('pen', 'images/pen.jpg');
new Product('pet-sweep', 'images/pet-sweep.jpg');
new Product('scissors', 'images/scissors.jpg');
new Product('shark', 'images/shark.jpg');
new Product('sweep', 'images/sweep.png');
new Product('tauntaun', 'images/tauntaun.jpg');
new Product('unicorn', 'images/unicorn.jpg');
new Product('water-can', 'images/water-can.jpg');
new Product('wine-glass', 'images/wine-glass.jpg');


let leftIndex = 0;
let rightIndex = 0;
let midIndex = 0;
let leftIndex1;
let rightIndex1;
let midIndex1;
parent.addEventListener('click', handleClick);

function handleClick(event) {
    counter++;

    if (maxAttempts >= counter) {

        if (event.target.id === 'left-image') {
            Product.all[leftIndex].vote++;

        } else if (event.target.id === 'right-image') {
            Product.all[rightIndex].vote++;

        } else if (event.target.id === 'mid-image') {
            Product.all[midIndex].vote++;

        } else {
            counter--;
            return
        }



        renderThreeImages();
    } else {
        parent.removeEventListener('click', handleClick);
    }




}

function renderList() {
    const ul = document.getElementById('unList');
    for (let i = 0; i < Product.all.length; i++) {

        allVote.push(Product.all[i].vote);
        allShown.push(Product.all[i].time);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Product.all[i].name} has this number of votes ${Product.all[i].vote} and shown ${Product.all[i].time} times`
    }
    btn.removeEventListener('click', handCl);
}


let btn = document.getElementById('bt');
btn.addEventListener('click', handCl);
function handCl(event) {
    renderList();
    gettingChart();
}

//render images
function renderThreeImages() {
    leftIndex1 = leftIndex;
    rightIndex1 = rightIndex;
    midIndex1 = midIndex;
    console.log(leftIndex1 + 'i1');
    console.log(rightIndex1 + 'i1');
    console.log(midIndex1 + 'i1');
    leftIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
    midIndex = generateRandomIndex();
    console.log(leftIndex);
    console.log(rightIndex);
    console.log(midIndex);
    while (leftIndex === rightIndex || leftIndex === midIndex || rightIndex === midIndex) {
        leftIndex = generateRandomIndex();
        rightIndex = generateRandomIndex();
    }
    console.log("befor");
    let indexes = [leftIndex, rightIndex, midIndex];
    let pIndexes = [leftIndex1, rightIndex1, midIndex1];

    if (counter !== 0) {
        console.log("beforwh");
        while (intersection(indexes, pIndexes).length !== 0) {
            console.log("inwh");
            leftIndex = generateRandomIndex();
            rightIndex = generateRandomIndex();
            indexes = [leftIndex, rightIndex, midIndex];
        }
        // console.log(intersection(indexes, pIndexes));
    }
    console.log('after if');
    leftImage.src = Product.all[leftIndex].source;
    rightImage.src = Product.all[rightIndex].source;
    midImage.src = Product.all[midIndex].source;


    Product.all[leftIndex].time++;
    Product.all[rightIndex].time++;
    Product.all[midIndex].time++;
}
renderThreeImages();

function generateRandomIndex() {
    return Math.floor(Math.random() * Product.all.length);

}

/////////////
function intersection(a, b) {
    console.log(a);
    console.log(b);
    console.log('insidef');
    let result = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                result.push(a[i]);
            }
        }
    }
    console.log(result + 'res');
    return result;
}
/////////////////
function gettingChart() {
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: allName,
            datasets: [{
                label: '# of Votes',
                data: allVote,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }, {
                label: '# of Shown',
                data: allShown,
                backgroundColor: [
                    'rgb(54, 162, 235)'
                ]
            }]
        },
    })
}
