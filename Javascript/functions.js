//sum of array 
let sumArray = (a) => {  
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum = sum +a[i];
    }
    return sum;}
console.log(sumArray([1 , 4, 6, 9]))


//check palindrome 252
// reverse a string

function reverse(str) {
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr = revStr + str[i];
        console.log(revStr)
    }
    return revStr;
}

console.log(reverse("Dayananda"))

function palindrome(n) {
    let strN = '' + n;
    let revN = reverse(strN);
    return strN == revN;
}
console.log(palindrome(12321))


// write a function that takes a number n as input and outputs the list of digits of the number.

function digits(n) {
    let strN = ' ' + n;
    let arr = [];
    for(let i = 0; i < strN.length; i++) {
        arr.push(Number(strN[i])) 
    }
    return arr;
}
console.log(digits(12345))