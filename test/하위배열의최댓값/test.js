function maxSubarraySum(nums, limit) {
  // add whatever parameters you deem necessary - good luck!
  if (nums.length < limit) return null;
  let result = nums.slice(0, limit).reduce((acc, cur) => acc + cur, 0);
  let testCase = result;
  for (let i = 1; i < nums.length - limit + 1; i++) {
    testCase = testCase - nums[i - 1] + nums[i + limit - 1];
    if (testCase > result) result = testCase;
  }
  return result;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
