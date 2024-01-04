const sum = require('./sum.js');

test('add a and b', () => {
    
    expect(sum(12,24)).toBe(36);
 })