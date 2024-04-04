let pill;
console.log(pill)

if(pill  == 'red'){
    console.log('reality')
} else if(pill == 'blue'){
    console.log('stay is matrix')
} else {
    console.log('kill yourself.')
}


// switch

switch(pill){
    case 'red': {
        console.log('reality');
        break;
    }
    default: {
        console.log('stay in matrix');
        break;
    }
       {
        console.log('kill yourself.');
        break;
    }
}


//quesstions

let number = 'one';
if(number % 2 == 0) {
    console.log('Number is even', number);
} else if( number % 2 == 1) {
    console.log('Number is odd', number);
} else {
    console.log('invalid input');
}


// leapy year


let year;
if(year % 100 == 0) {
    if(year % 400 == 0) {
        console.log('Leap year'. year)
    } else{
        console.log('Not leap year')
    }
 } else if(year % 4 == 0) {
    console.log('Leap year', year)
 } else {
    console.log('Not leap year')
 }


 //check grade: A >= 80, 80 > B >= 60
 
 let marks;
 let grade;
 if(marks >= 80) {
    grade = 'A';
 } else if(marks < 80 && marks >= 60) {
    grade = 'B';
 } else if(marks < 60 && marks >= 40) {
    grade ='C';
 } else if(marks < 40 && marks >= 0) {
    grade = 'D';
 }  else {
    grade = 'undefined'
 }
 console.log('Grade', grade)

 
 
 //type of triangle

 let a = 3, b = 4, c = 3;
 if(a == b && b == c) {
    console.log('triangle is equilateral')
 } else if(a == b || b == c || c == a) {
    console.log('triangle is isosceles') 
 } else {
    console.log()
 }