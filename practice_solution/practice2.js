function getCount8() {
  let count = 0;

  for (let i = 1; i <= 10000; i++) {
    const strnum = i.toString();
    for (let j = 0; j < strnum.length; j++) {
      if (strnum[j] === '8') {
        count += 1;
      }
    }
  }
  return count;
}

console.log(getCount8()); // 4000
