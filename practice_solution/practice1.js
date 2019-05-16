// if문
function evenOrOdd(num) {
  if(num%2 === 0){
    return 'Even';
  }

    return 'Odd';

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even
