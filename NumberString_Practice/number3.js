// 정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.
function ceilBy5(num) {
  return (num % 5) === 0 ? num : num + (5 - (num % 5));
}

console.log(ceilBy5(30)); // 30
console.log(ceilBy5(32)); // 35
console.log(ceilBy5(37)); // 40
