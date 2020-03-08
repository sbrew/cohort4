import arrayFunctions from './arrays'

test('does it add to the array', () => {
    // expect(arrayFunctions.addArray()).toStrictEqual([undefined]);
    // expect(arrayFunctions.addArray(1)).toStrictEqual([1]);
    expect(arrayFunctions.addArray(3)).toStrictEqual([3]);
});

// test('does this add up the array', () => {
//     // expect(arrayFunctions.totalArray()).toStrictEqual();
//     expect(arrayFunctions.totalArray([10, 30])).toStrictEqual(40);
// });

test('does this clear the array', () => {
    expect(arrayFunctions.clearArray(1,2)).toStrictEqual([]);
});