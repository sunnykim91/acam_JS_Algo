// 9번
// 문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.

function changeUpdowncase(str){

  result = [];

  for(var i=0;i<str.length;i++){
    if(str[i] === str[i].toUpperCase()){
      result += str[i].toLowerCase();
    }
    else{
      result += str[i].toUpperCase();
    }
  }

  return result;

}
console.log(changeUpdowncase("AaBbCc"));