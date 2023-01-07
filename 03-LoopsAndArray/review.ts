let review : number [] = [1,2,3,4,5,6,7,8];
let total : number = 0;
for (let i=0; i<review.length; i++){
    console.log(review[i]);
    total += review[i]
}

let average : number = total/review.length;
console.log("Review Average" , average)

//run with cmd
// tsc .\review.ts 
// node .\review.js