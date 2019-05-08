//삼각형 출력하기 - pattern 1
//다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 
//완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

/*결과값*/
// *
// **
// ***
// ****
// *****

var line = 5;
var result = "";

for(var i=1;i<=line;i++){
  for(var j=1;j<=i;j++){
    result += "*";
  }
  result += "\n";
}

console.log(result);