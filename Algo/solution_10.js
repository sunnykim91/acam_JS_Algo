// 10번
// 문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

function changeFirstUpper(str){
  
  flag = true;
  result = [];

  for(var i=0;i<str.length;i++){
    if (flag== true && str[i] != " ") {
      result += str[i].toUpperCase();
      flag = false;
    }
    else if(str[i] == " "){
      result += str[i];
      flag = true;
    }
    else{
      result += str[i];
    }
  }

  return result;
}

console.log(changeFirstUpper("i am ironman"));