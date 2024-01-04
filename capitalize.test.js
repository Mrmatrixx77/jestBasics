const capitalize = require('./capitalize.js');
test('first letter capitalize', ()=>{
    expect(capitalize("string")).toBe("String");
});