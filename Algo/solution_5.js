

// 5번
// 문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. 
// (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)


function distinguishPalindrome(str){

  str_arr = [];
  str_arr1 = [];
  str_arr2 = [];

  for (i = 0; i < str.length; i++) {
    str_arr[i] = str.slice(i, i + 1);
  }
  

  if(str_arr.length%2 == 0){  //문자열의 길이가 홀수이면, 가운데 값은 중요하지않음.
    for (j = 0; j < (str_arr.length/2) - 1; j++) {
      str_arr1.push(str_arr[j]);
    }
    for (k = str_arr.length - 1; k>(str_arr.length/2); k--) {
      str_arr2.push(str_arr[k]);
    }
  }
  else{
    for (j = 0; j < (str_arr.length / 2); j++) {
      str_arr1.push(str_arr[j]);
    }
    for (k = str_arr.length - 1; k >= (str_arr.length / 2); k--) {
      str_arr2.push(str_arr[k]);
    }
  }

  for (l = 0; l < str_arr1.length; l++) {
    if (str_arr1[l] != str_arr2[l]) {
      return "no";
    }
    return "yes";
  }

}

console.log(distinguishPalindrome("never odd or even"));