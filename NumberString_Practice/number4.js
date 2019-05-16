// 임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.
function htmlHexCode() {
  return `#${Math.round(Math.random() * (2 ** 24)).toString(16)}`;
}

console.log(htmlHexCode()); // #00FF12
