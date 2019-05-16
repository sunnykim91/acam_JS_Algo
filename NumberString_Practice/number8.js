// Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.


function snakeToCamel(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '_') {
      result += s[i + 1].toUpperCase();
      i += 1;
    } else {
      result += s[i];
    }
  }
  return result;
}
console.log(snakeToCamel('hello_world_javascript')); // 'helloWorldJavascript'
