// for (let i = 0; i < 10; i++)

// Question
// 1.
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 2.
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact = fact * i;
}
console.log('Factorial of', n, 'is', fact);

// 3.
let x = 0;
let sum = 0;
let last = 100;
while (x <= last) {
    sum = sum + x;
    x++;
}
console.log('Total sum from 1 to 100 is:', sum);

// 4.