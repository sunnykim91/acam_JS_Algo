//삼각형 출력하기 - pattern 2

/*결과값*/
// *****
//  ****
//   ***
//    **
//     *


var line = 5;

for (var i = line; i >= 1; i--) {
  for (var j = 1; j < 6 - i; j++) {
    process.stdout.write(" ");
  }
  for (var k = 1; k <= i; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}