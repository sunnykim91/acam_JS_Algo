// 소수인 숫자와, 자릿수를 받아서 소수를 자리수만큼만 자른 뒤 반환하는 함수를 작성하세요.
function fixFloat(floatnum, digit) {
  return floatnum.toFixed(digit);
}


console.log(fixFloat(10.12345, 2)); // 10.12
console.log(fixFloat(15.5678, 1)); // 15.6
