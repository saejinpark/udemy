function charClear(charObj, outChar) {
  let dec = 0;
  for (let char in charObj) {
    delete charObj[char];
    dec++;
    if (!charObj[outChar]) break;
  }
  return dec;
}

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;
  let result = 0;
  let charObj = {};
  let count = 0;
  for (let char of str) {
    if (charObj[char]) {
      count -= charClear(charObj, char);
    }
    charObj[char] = true;
    count++;
    if (count > result) result = count;
  }
  return result;
}

// findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
