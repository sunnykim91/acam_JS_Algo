// 정삼각형 출력하기

/*결과값 */
//     *
//    ***
//   *****
//  *******
// *********


const line = 5;
let result = '';

for (let i = 1; i < line * 2; i += 2) {
  for (let j = 1; j < ((line * 2) - i) / 2; j++) {
    result += ' ';
  }
  for (let l = 1; l <= i; l++) {
    result += '*';
  }
  for (let k = 1; k < ((line * 2) - i) / 2; k++) {
    result += ' ';
  }
  result += '\n';
}
console.log(result);
