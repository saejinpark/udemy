function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  const argObject = {};
  for(let arg of args) {
    if(argObject[arg])return true;
    argObject[arg] = true;
  }
  return false;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 