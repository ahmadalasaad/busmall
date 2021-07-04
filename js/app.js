const parent = document.getElementById('sec-one');
const rightImage = document.getElementById('right-image');
const leftImage = document.getElementById('left-image');
const midImage = document.getElementById('mid-image');

const maxAttempts = 25;
let counter = 0;

function Product(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.time = 0;
    Product.all.push(this);
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


let leftIndex;
let rightIndex;
let midIndex;

parent.addEventListener('click', handleClick);

function handleClick(event) {
    counter++;
    // console.log(event.target.id);
    // console.log(counter);
    if (maxAttempts >= counter) {
        //if (event.target.id === 'left-image' || event.target.id === 'right-image' || event.target.id === 'mid-image') {
        Product.all[leftIndex].time++;
        Product.all[rightIndex].time++;
        Product.all[midIndex].time++;
        // }
        if (event.target.id === 'left-image') {
            Product.all[leftIndex].vote++;
            //  Product.all[leftIndex].time++;
        } else if (event.target.id === 'right-image') {
            Product.all[rightIndex].vote++;
            //  Product.all[rightIndex].time++;
        } else if (event.target.id === 'mid-image') {
            Product.all[midIndex].vote++;
            //  Product.all[midIndex].time++;
        }
        renderThreeImages();
    } else {
        parent.removeEventListener('click', handleClick);
    }
    console.log(Product.all);


}

function renderList() {
    const ul = document.getElementById('unList');
    for (let i = 0; i < Product.all.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Product.all[i].name} has this number of votes ${Product.all[i].vote} and shown ${Product.all[i].time} times`
    }
    btn.removeEventListener('click', handCl);
}

//
let btn = document.getElementById('bt');
btn.addEventListener('click', handCl);
function handCl(event) {
    renderList();
}
//
//render images
function renderThreeImages() {
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

    leftImage.src = Product.all[leftIndex].source;
    rightImage.src = Product.all[rightIndex].source;
    midImage.src = Product.all[midIndex].source;

}
////
renderThreeImages();

function generateRandomIndex() {
    return Math.floor(Math.random() * Product.all.length);

}