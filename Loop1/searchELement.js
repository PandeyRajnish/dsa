let arr = [1, 2, 4, 5];

function serchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(serchElement(arr, 5));

function findElement(arr, element) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === element) return i;
    i++;
  }

  return -1;
}

console.log(findElement(arr, 4));
console.log(findElement(arr, 44));


