function generateMid(start, end) {
  return Math.floor((start + end) / 2);
}

function binarySearch(arr, elem) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0, end = arr.length - 1;
  let mid = generateMid(start, end);

  while (arr[mid] !== elem && start <= end) {
    arr[mid] < elem ? (start = mid + 1) : (end = mid - 1);
    mid = generateMid(start, end);
  }
  return arr[mid] === elem ? mid : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
