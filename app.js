name = 'Santita Humphries';
var name;
console.log(name);

setName();

function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log('start');
let avg = findAverage(2, 2);
console.log('The average is', avg);

function findAverage(a, b) {
    console.log('Find the average of two numbers');
    var result = (a + b) / 2;
    return result;
}

let fruitArr = ['Apple', 'Banana', 'Oragnge'];





function fruit() {
    console.log(fruitArr[0]);
    let favFruit = fruitArr[2];

    function printFavFruit () {
        // let leastFav = fruitArr[1];
        console.log(favFruit);
    }
    // console.log(leastFav);
    printFavFruit();
}

fruit();

someFunc();

function someFunc(){
    console.log('Hello ' + name);
}



let msg = function() {
    alert('Hello!');
}

msg();
