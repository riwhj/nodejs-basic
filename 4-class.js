class Calculator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const calculatorobject = new Calculator();
console.log(Calculator.sum(1, 2));
console.log(calculatorobject.sum2(2, 3));
console.log(calculatorobject.multiply(10, 20));
