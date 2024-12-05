const add = require('./add');

describe('add function', () => {
    it('should return 0 if input is empty', () => {
        expect(add('')).toBe(0);
    });
    it('should return the number if only single number is passed', () => {
        expect(add('2')).toBe(2);
    });
})