import calcFunctions from './calc'

test('what is the sum', () =>{
    expect(calcFunctions.addition(0,0)).toBe(0);
    expect(calcFunctions.addition(1,3)).toBe(4);
});

test('what is the difference', () =>{
    expect(calcFunctions.subtraction(2,1)).toBe(1);
    expect(calcFunctions.subtraction(2,-1)).toBe(3);
});

test('what is the product', () =>{
    expect(calcFunctions.multiply(1,1)).toBe(1);
    expect(calcFunctions.multiply(1,2)).toBe(2);
});

test('what is the quotient', () =>{
    expect(calcFunctions.divide(1,1)).toBe(1);
    expect(calcFunctions.divide(10,1)).toBe(10);
});