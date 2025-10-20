class Rectangle {
  constructor(width, height) {
    // ensure positive integers
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers");
    }
    this._width = width;
    this._height = height;
  }

  // getter for width
  get width() {
    return this._width;
  }

  // getter for height
  get height() {
    return this._height;
  }

  // method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // ensure positive integer
    if (side <= 0) {
      throw new Error("Side must be a positive integer");
    }
    // call Rectangle constructor with width = height = side
    super(side, side);
    this._side = side;
  }

  // method to calculate perimeter
  getPerimeter() {
    return 4 * this._side;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
