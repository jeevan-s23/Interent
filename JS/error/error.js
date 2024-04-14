// throw
// throw 42;
// throw {
    // head:'tail'
// }


//try ...catch...finally

// let divide=(a,b) => {
//     try{
//         if(b==0){
//             throw "division  by 0"
//         } else{
//             return a/b;
//         }

//     } catch(e){
//         console.log(e);
//         console.log('why are you dividing by 0?')

//     }
// }

// let sum =(a,b,c) => {
//     let div =divide(a,b);
//     return div + c;
// }

// console.log(sum(1,0,2))

// comput area with length and width are positive numbers


//Write a JavaScript function to calculate the area of a rectangle given its length and width.
// let area =(length,width) => {
//     try{
//        if(length<0 || width <0){
//             throw 'negative values'
//         }
//         else{
//             return length * width;
//         }
//     }catch(e){
//         alert(e)
//     }
// }

// console.log(area(-4,9))


// Create a function that takes an array of numbers as input and returns the sum of all the numbers.
let sumarray = (i) => {
    try {
        if (i.length == 0) {
            throw 'Empty Array'
        } else {
            let su = 0;
            for (let j = 0; j < i.length; j++) {
                su = su + i[j];
            }
            return su;
        }
    }
    catch(e) {
        console.log(e);
    }
}

console.log(sumarray([1,4,9]));

//Implement a function that checks if a given number is a palindrome (reads the same forwards and backwards)

