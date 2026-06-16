// WAF  that counts and  return negative numbers in an array

const negativeArray = [1, 3, 5, 6, 10];

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }

  return count;
}

console.log(countNegative(negativeArray));
