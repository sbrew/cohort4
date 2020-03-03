import taxFunctions from './taxes'

test('Check the total tax amount', () => {
    expect(taxFunctions.taxCalc(40000)).toStrictEqual("6000.00");
    expect(taxFunctions.taxCalc(70000)).toStrictEqual("11680.58");
    expect(taxFunctions.taxCalc(100000)).toStrictEqual("17991.78");
    expect(taxFunctions.taxCalc(175000)).toStrictEqual("38227.59");
    expect(taxFunctions.taxCalc(250000)).toStrictEqual("61313.77");
});