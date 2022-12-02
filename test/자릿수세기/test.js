function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  const arr1 = ("" + num1).split("").sort();
  const arr2 = ("" + num2).split("").sort();
  if(arr1.length !== arr2.length) return false;
  for(let i=0; i<arr1.length; i++) {
      if(arr1[i] !== arr2[i]) return false
  }
  return true;
}
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false