// 4번
// 문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.
//     countChar('tomato'); -> { t: 2, o: 2, m: 1, a: 1 }

function countChar(str){

  str_arr=[];     //문자열을 쪼개서 넣을 배열
  result_arr=[];   //결과를 담을 배열
  var count = 1;   //갯수 셀 변수

  //문자열을 각각 쪼개서 배열에 담는 for문
  for(i=0;i<str.length;i++){
     str_arr[i] = str.slice(i, i + 1);
  }

  //배열안에 있는 요소들을 비교해서 같은 값이 있는지 찾는 for문
  for(i=0;i<str_arr.length;i++){
    for(j=i+1;j<str_arr.length;j++){
      if (str_arr[i] == str_arr[j]){    //같은 값이 있다면, 카운트를 하나 증가시키고, 문자열 뒤쪽에 나오는 같은문자들은 null처리
        count+=1;
        str_arr[j] = null;
      }
    }
    if(str_arr[i] != null){            //null이 아닌경우에만 배열에 값을 넣어줌.
      str_arr[i] = (str_arr[i] + ":" + count);  //배열안에 답 형태로 출력하기위해 다시 넣어준다.
      count = 1;              // 카운트 초기화
    }
  }

  //null값을 제외하고 출력하기 위해 최종결과 배열에 null이 아닌것만 추가.
  for(k=0;k<str_arr.length;k++){
      if (str_arr[k] != null) {
        result_arr.push(str_arr[k]); 
      }
  }

  return result_arr
}

console.log(countChar("tomato"));