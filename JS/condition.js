// If else statements
let pill = 'red';
console.log(pill);

if (pill = 'red') {
    console.log('Good Tablet')
} else if (pill = 'blue') {
    console.log('Not a good tablet')
} else {
    console.log('Your are going to die')
}


// switch statements
switch(pill) {
    case 'red': {
        console.log('Hello')
    }
    case 'blue': {
        console.log('World')
    }
    default: {
        console.log('Kill or die')
        break;
    }
}

// Questions
// 1.
let number = 'one';
if (number % 2 == 0) {
    console.log('It is even number.')
} else if (number % 2 == 1) {
    console.log('It is odd number.')
} else {
    console.log('Invalid Input!')
}

// 2.
let year = 2024;
if (year % 4 == 0) {
    console.log('It is leap year')
} else if (year % 4 == 1) {
    console.log('It is not a leap year.')
} else{
    console.log('Invalid input!')
}

// 3.
let marks = 85;
let grade;
if (marks >= 80) {
    grade = 'A'
} else if (marks > 60 && marks >= 79) {
    grade = 'B'
} else if (marks < 60 && marks >= 40) {
    grade = 'C'
} else if (marks < 40 && marks >= 0) {
    grade = 'D'
} else {
    console.log('Invalid marks')
}
console.log('Your Grade is:', grade);

// 4.
let side_a = 8;
let side_b = 8;
let side_c = 9;
// In a scalene triangle, all the sides of a triangle are of different length.
// In an isosceles triangle, two sides of a triangle are of the same measure.
// In an equilateral triangle, all the sides of a triangle are of equal length.
if (side_a == side_b && side_b == side_c) {
    console.log('It is equilateral triangle')
} else if (side_a == side_b || side_b == side_c || side_a == side_c) {
    console.log('It is isosceles triangle')
} else {
    console.log('It is scalene triangle')
}

// 5. 


// 6.
let day = 5;
switch(day) {
    case 1: {
        console.log('Monday')
        break;
    }
    case 2: {
        console.log('Tuesday')
        break;
    }
    case 3: {
        console.log('Wednesday')
        break;
    }
    case 4: {
        console.log('Thrusday')
        break;
    }
    case 5: {
        console.log('Friday')
        break;
    }
    case 6: {
        console.log('Saturday')
        break;
    }
    case 7: {
        console.log('Sunday')
        break;
    }
}

// 7.
let season = '12-3';
switch (season) {
    case 4-5: {
        console.log('It is Summer')
        break;
    }
    case 6-9: {
        console.log('It is Rainy')
        break;
    }
    case 10-11: {
        console.log('It is Post-monsoon')
        break;
    }
    case 12-3: {
        console.log('It is Winter')
        break;
    }
}