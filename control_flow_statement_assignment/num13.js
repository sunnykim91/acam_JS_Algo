//삼각형 출력하기 - pattern 3

/*결과값*/
// *****
// ****
// ***
// **
// *

var line = 5;

for (var i = line; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
