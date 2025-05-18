/***
 * Given an array of integers, write a function to find the index of a target element using linear search.
 */

const arr = [1,2,4,5,8,9,34,13,56,34,38,90,91];

const target = 910;

const elementFound = arr.some((x) => x == target);

if(elementFound){
    console.log("Element is found");
}else{
    console.log("Element is not found");``
}