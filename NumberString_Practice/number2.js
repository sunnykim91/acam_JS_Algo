// 두 정수 min, max 를 입력받아, min 이상 max 미만인 임의의 정수를 반환하는 함수를 작성하세요.
function minToMax(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(minToMax(2, 8)); // 2 ~ 7 중 랜덤의 수
