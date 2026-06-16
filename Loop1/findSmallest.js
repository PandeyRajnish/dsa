// WAF to find the minimum number in an array

let arr = [77, 3, 2, 1, 45];
let negativeArray = [-1, -2, -4, -1];

function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(findSmallest(arr));
console.log(findSmallest(negativeArray));

// let smallest = negativeArray.reduce((min, num) => {
//   return num < min ? num : min;
// });

// console.log(smallest);

let largest = arr.reduce((max, num) => {
  return num > max ? num : max;
});
console.log(largest);
