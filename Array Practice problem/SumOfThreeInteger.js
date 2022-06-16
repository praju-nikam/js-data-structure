//  Write a Program to show Sum of three Integer adds to ZERO

let arr = [0, 1, 2, -1, -3]
FindTriplte(arr, arr.length);

function FindTriplte(arr, length) {
    let isFound = false;
    console.log("Sum of Three Numbers Equal to Zero are : ");
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    console.log(arr[i] + " " + arr[j] + " " + arr[k] + " ");
                    isFound = true;
                }
            }
        }
    }

    if (isFound == false)
        console.log("Not Exists!");
}