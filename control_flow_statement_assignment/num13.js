//삼각형 출력하기 - pattern 3

/*결과값*/
// *****
// ****
// ***
// **
// *

const line = 5;
let result = '';

for (let i = line; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);