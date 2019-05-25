
// 8번
// 이메일 주소를 입력받아, 아이디 부분을 별표(*)로 가린 새 문자열을 반환하는 함수를 작성하세요.
// 루프로 먼저 풀어보세요.
// split 메소드를 이용해서 풀어보세요.

function changeEmailid(email){

  result = [];
  flag = false;

  for(var i=0;i<email.length;i++){
    if (email[i] == "@") {
      flag = true;
    } 
    if(flag){
      result += email[i];
    }
    else{
      result += "*";
    }
  }
  return result;
}
console.log(changeEmailid("tjsgnl2002@naver.com"));