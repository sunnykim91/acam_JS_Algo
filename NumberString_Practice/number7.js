// Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.
function camelToSnake(s) {
  let result = '';
  if (s === undefined) {
    return '인자가 없습니다.';
  }
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      result += `_${s[i].toLowerCase()}`;
    } else {
      result += s[i];
    }
  }
  return result;
}

console.log(camelToSnake('helloWorld')); // 'hello_world'
