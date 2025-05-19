

const arr = [1,34,54,23,67,81,12,1,25,54,1,234,1,2,1,67,34,2,1,2];
const target = 2;
let count = 0;

const countOccurr = arr.filter(x => Number(x) == target);

console.log(countOccurr.length);