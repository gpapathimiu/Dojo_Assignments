// // var alwaysHungry = [3.14, "food", "pie", true, "food"];
// // // this should console log "yummy", "yummy"

// // function yummy(arr) {
// //     var foodCount = 0;
// //     for (var i = 0; i < arr.length; i++) {
// //         if (arr[i] == "food") {
// //             console.log("yummy");
// //             foodCount++;
// //         }
// //     }
// //         if (foodCount == 0) {
// //             console.log("I'm hungry");
// //     }
// // }

// // var numbers = [1, 2, 3];

// // yummy(alwaysHungry);
// // yummy(numbers);

// //Given an array and a value cutoff, return a new array containing only the values larger than cutoff.



// function highPass(arr, cutoff) {
//     var filtered = [];
//     for (var i=0; i < arr.length; i++){
//         if (arr[i] > cutoff ){
//         filtered.push(arr[i])
//         }
//     } 
//     return filtered;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);


// var result2 = highPass([2, 5, 3, 7, 9, 0, 1, 2, 5, -10], 5);

// console.log(result2);

// //Given an array of numbers return a count of how many of the numbers are larger than the average.

// var sum = 0;
// var count = 0;

// function betterThanAverage(arr) {
//     for (var i=0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         var avg = sum/arr.length; 
    
// }
//     for (var i=0; i < arr.length; i++) {
//     if (avg < arr[i]) {
//     count++;}
//     }
//     return count;
// }

// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);


//Write a function that will reverse the values an array and return them.
// function reverse(arr) {
//     var empty = [];

//     for (i = arr.length-1; i >=0; i--) {
//         empty.push(arr[i]);

//     }
//     return empty;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);


function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var fibArr1 = fibArr[fibArr.length-1];
        var fibArr2 = fibArr[fibArr.length-2];
        fibArr.push(fibArr1 + fibArr2);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
