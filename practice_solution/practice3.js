function alphaString46(s) {
  if (s === undefined) {
    return false;
  }
  if (s.length >= 4 && s.length <= 6) {
    const numStr = parseInt(s, 10);
    if (numStr) return true;
  }
  return false;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false
