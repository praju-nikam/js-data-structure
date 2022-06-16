/* Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/
let number = new Array;
for (let i = 0; i < 10; i++) {
    number[i] = Math.floor(100 + Math.random() * 900);
}
console.log(number);
let largest = number[0];
let smallest = number[0];
let secondLarge = 0,
    secondSmall = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] > largest) {
        secondLarge = largest;
        largest = number[i];
    } else if (number[i] < smallest) {
        secondSmall = smallest;
        smallest = number[i];
    }
}
console.log("Second Largest : " + secondLarge);
console.log("Second Smallest : " + secondSmall);