const CeasarCipher = require('./ceasarCipher.js');

test('should cipher by key of 3', () =>{
    expect(CeasarCipher("abcd")).toBe("defg");
})