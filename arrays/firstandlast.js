const arr = [1,34,54,23,67,81,12,1,25,54,1,234,1,2,1,67,34,2,1,2];


let count = 0;
const target = 1;
let firstIndex = 0;
let lastIndex = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] == target && count == 0){
        firstIndex = i;
        lastIndex = i;
        count = count + 1;
    }
    else if(arr[i] == target && count>0 ){
        lastIndex = i;
    }
}

console.log(`First Index: ${firstIndex}, Last Index: ${lastIndex}`);

const result = arr.reduce((acc,val,idx)=>{
    if(val == target){
        if(acc.first === -1){
            acc.first = idx;
        }else{
            acc.last = idx;
        }
    }
    return acc;
},{first:-1,last:-1});

console.log(`First Index: ${result.first}, Last Index: ${result.last}`);