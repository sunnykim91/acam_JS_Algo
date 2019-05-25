function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

const me = new Person('Lee');
const you = new Person('Kim');

console.log(me.getName());
console.log(you.getName());
