// WAF to find the largest number in the array

function findLargest(arr) {
  //   let largest = -1; // wont't work for negative numbers
  let largest = -Infinity;
  //   let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

let arr = [15, 0, 7, 2, 1, 10];
let arr1 = [-10, -2, -7, -1];
console.log(findLargest(arr));
console.log(findLargest(arr1));
