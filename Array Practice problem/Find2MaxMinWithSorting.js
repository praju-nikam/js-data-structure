// 2. Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

let arr = new Array();
for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 1000);
    arr.push(randomNumber); //Adding Values into Array
}
console.log("Random Number in an Array are: ");
console.log(arr.join(','));

let sortedArray = arr.sort(); //Sort Function for array.
console.log("The Sorted Array : ");
console.log(sortedArray.join(',')); //Print the Sorted Array.

let SecondMaxNumber = SecondLargest(arr);
let SecondMinNumber = SecondSmallest(arr);

console.log("The Second Largest Number in an Array is : " + SecondMaxNumber);
console.log("The Second Minimum Number in an Array is : " + SecondMinNumber);

function SecondLargest(arr) {
    let maxNumber = Math.max(...arr); //Finding the Maximum Number
    //console.log(maxNumber);
    arr.splice(arr.indexOf(maxNumber), 1); //Remove the Maximum Number.
    return Math.max(...arr); //Return Second Largest Number.
}

function SecondSmallest(arr) {
    let minNumber = Math.min(...arr); //Finding Minimum Number
    //console.log(minNumber);
    arr.splice(arr.indexOf(minNumber), 1); //Remove the Minimum Number.
    return Math.min(...arr); //Return Second Smallest Number.
}