class Circle {
  constructor(radius) {
    this.radius = radius;
    console.log(this);
  }


  getArea() {
    return Math.PI * (this.radius * this.radius);
  }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this.height = height;
  }
}

const cylinder = new Cylinder(5, 10);

console.log(cylinder);
