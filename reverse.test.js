  const reverseString =  require('./reverse.js');

  test('should reverse the string', ()=>{
    expect(reverseString("test")).toBe("tset");
  });