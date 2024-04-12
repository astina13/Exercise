//throw expression;

//throw 42;
//throw 'ball';
//throw {
    head: 'Tail'
// }

//try....catch......finally

let divide = (a, b) => {
    try {
        if(b == 0) {
            throw "division by 0"
        }else {
            return a/ b;
        }
    } catch(e){
        console.log(e);
        console.assertlog('why are you dividing by 0?')
    }
}


let sum = (a, b, c) => {
    let div = divide(a, b);
    return div + c;
}

console.log(divide(1, 0, 2));

// compute area only when length and width are positive numbers
let area = (length, width) => {
    try {
        if(length < 0 || width < 0) {
            throw  "negative values"
        }else {
            return length * width;
        }
        } catch(e) {
            alert(e);
        }
}
console.log(area(4, 9));

//Create a function that takes an array of numbers as input and returns the sum of all the numbers.

function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 

//OR 

let sumArray = (a) => {
    try{
        if(a.length == 0) {
            throw "empty array";
        } else {
            let sum = 0;
            for(let i = 0; i < a.length; i++){
                sum = sum + a[i];
            }
            return sum;
        }

    } catch(e) {
        console.log(e);

    }
}
console.log(sumArray(1, 2, 3, 4));

  
