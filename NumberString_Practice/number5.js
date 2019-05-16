// rgb색상코드를 랜덤으로 반환하는 함수를 작성하세요.

function randomRgbCode() {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}

console.log(randomRgbCode());
