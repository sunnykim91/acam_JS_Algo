//삼각형 출력하기 - pattern 2

/*결과값*/
// *****
//  ****
//   ***
//    **
//     *


var line = 5;
var result = "";

for (var i = line; i >= 1; i--) {
  for (var j = 1; j < 6 - i; j++) {
    result += " ";
  }
  for (var k = 1; k <= i; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);