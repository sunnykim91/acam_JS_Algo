
// 7번
// 문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.
//     removeDuplicates('tomato'); -> 'toma'
// removeDuplicates('bartender'); -> 'bartend'

function removeDuplicates(str){

  result = [];

  for(var i=0;i<str.length;i++){
      if (!result.includes(str[i])) {
        result += str[i];
      }
  }

  return result;
}

console.log(removeDuplicates("bartender"));