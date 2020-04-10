import daily from './daily'

test('convert to Fahrenheit', () =>{
    expect(daily.convertToFahrenheit(0)).toBe(32);
    expect(daily.convertToFahrenheit(22)).toBe(71.6);
});