const num1 = [2,7,11,15];
const target = 9;
const num2 = [3,2,4];
const target2 = 6;
const num3 = [3,3];
const target3 = 6;




function twoSum(nums,target){
    let index = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                index[0] = i;
                index[1] = j;
                break;
            }
        }
    }

    return index;
}

const twoSumResult = twoSum(num1,target);
const twoSumResult2 = twoSum(num2,target2);
const twoSumResult3 = twoSum(num3,target3);

console.log(twoSumResult);
console.log(twoSumResult2);
console.log(twoSumResult3)