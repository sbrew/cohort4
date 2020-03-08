import provinces from './dictionary'

test('does it check the province', () => {
    expect(provinces.lookupProv("AB")).toBe("Alberta");
    expect(provinces.lookupProv("BC")).toBe('British Columbia');
    expect(provinces.lookupProv('mb')).toBe('Manitoba');
});