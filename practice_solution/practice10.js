function getMaxValueFromArray(array) {
  // return Math.max.apply(null, array); // null자리에는 this가 오려고 보니까, Math는 정적이기때문에 this를 쓰지 않는다.
  return Math.max.apply(...array);
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  return Math.min.apply(null, array);
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5

// apply는 두번쨰 인자가 배열 , 호출할 함수들에게 전달할 인수들의 리스트
// call함수는 두번째 부터 인수가 리스트를 ,로 구분
// apply와 call의 하는 일은 같다.
