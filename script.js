class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculate() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  calculate() {
    return this.side * this.side;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = new Square(2);
