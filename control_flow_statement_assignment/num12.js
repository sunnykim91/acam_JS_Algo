// 삼각형 출력하기 - pattern 2

/* 결과값 */
// *****
//  ****
//   ***
//    **
//     *

const line = 5;
let result = '';
for (let i = line; i >= 1; i--) {
  for (let j = 1; j < 6 - i; j++) {
    result += ' ';
  }
  for (let k = 1; k <= i; k++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);
