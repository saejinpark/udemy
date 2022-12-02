function addObject(object, value) {
  return object[value] ? object[value]++ : (object[value] = 1);
}

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Obj = {};
  for (let i = 0; i < str1.length; i++) {
    addObject(str1Obj, str1[i]);
  }
  for (let char of str2) {
    if (!str1Obj[char]) return false;
    str1Obj[char]--;
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
