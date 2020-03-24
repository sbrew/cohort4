


test('just playing--------------', () => {
    console.log("We are here yes...");
    expect(123).toBe(123);
});

test('Test the link to play.js', () => {
    console.log('in link test');
    const retval = pfunc.play(123);
    expect(retval[0]).toBe(123);
})