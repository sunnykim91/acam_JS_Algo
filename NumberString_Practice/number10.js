// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를
// 전부 * 으로 가린 문자열을 리턴하는 함수를
// String.prototype.repeat, String.prototype.replace, String.prototype.substring등의
// String 관련 메소드를 활용해서 작성하세요.

// 제한 조건

// s는 길이 4 이상, 20이하인 문자열입니다.
//   출처: 프로그래머스[핸드폰 번호 가리기]

function hidePhoneNumber(s) {
  let result = '';
  for (let i = 0; i < s.length - 4; i++) {
    result += s[i].replace(s[i], '*');
  }
  for (let i = s.length - 4; i < s.length; i++) {
    result += s[i];
  }
  return result;
}

console.log(hidePhoneNumber('01033334444')); // '*******4444'
console.log(hidePhoneNumber('027778888')); // '*****8888'
