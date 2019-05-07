
// 6번
// 문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.
//     subString('햄버거');
// // 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']

function subString(str){

  str_arr = [];
  result_arr = [];

  for (i = 0; i < str.length; i++) {
    str_arr[i] = str.slice(i, i + 1);
  }

  for(i=0;i<str.length;i++){
    result_arr.push(str_arr[i]);

    for(j=result_arr.length;j<(str.length+result_arr.length);j++){
      result_arr.push(result_arr[j-1]+str_arr[j]);
    }
  }

  return result_arr;
}

console.log(subString("햄버거"));