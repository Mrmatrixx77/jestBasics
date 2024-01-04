// import calculator from "./calculator.js";
const calculator = require('./calculator')

test('should add a , b', () => { 
    expect(calculator.add(2,4)).toBe(6);
 })
 test('should subtract a , b', () => { 
    expect(calculator.subtract(8,4)).toBe(4);
 })
 test('should multiply a , b', () => { 
    expect(calculator.multiply(2,4)).toBe(8);
 })
 test('should divide a , b', () => { 
    expect(calculator.divide(4,2)).toBe(2);
 })