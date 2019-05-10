// 삼각형 출력하기 - pattern 4

/*결과값 */
//     *
//    **
//   ***
//  ****
// *****

const line = 5;
let result = '';

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= line - i; j++) {
    result += ' ';
  }
  for (let k = 1; k <= i; k++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);
