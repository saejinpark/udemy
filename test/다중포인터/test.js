function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let testCase = 0;
  for (let i=0; i<arr.length; i++) {
    if (!testCase) {
      testCase = i;
      count++;
    }
    if (testCase !== i) {
      count++;
      testCase = i;
    }
  }
  return count;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

