// for(let i = 0; i < 10, i++)

for(let i =1; i <= 1;) {
    console.log(i);
}

// factorial n! = 1 * 2 * 3 * 4 * ..... * n


let n = 5;
let factorial = 1;
for(let i = 1; i <= n; n++) {
    factorial = factorial * i;
}
console.log("factorial of", n, "is", factorial)

// while loop

let count = 0;
let sum = 0;
let last = 100;

while(count <= last) {
    sum = sum + count;
    count++;
}
console.log('sum is ', sum);


//multiplication

let num = 3;
let table = [];

for(let i =1; i<= 10; i++) {
    table.push(num * i);
}
console.log('Table of', num ,'is', table)