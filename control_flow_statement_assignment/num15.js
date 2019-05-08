//정삼각형 출력하기

/*결과값*/
//     *
//    ***
//   *****
//  *******
// *********


var line = 5;
var result = "";

for (var i = 1; i < line*2; i+=2) {
  for (var j = 1; j < ((line * 2) - i) / 2 ; j++) {
    result += " ";
  }
  for( var l=1; l<=i;l++){
    result += "*";
  }
  for (var k = 1; k < ((line * 2) - i) / 2; k++) {
    result += " ";
  }
  result += "\n";
}
console.log(result);