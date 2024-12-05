const add = require('./add');

describe('add function', () => {
    it('should return 0 if input is empty', () => {
        expect(add('')).toBe(0);
    });

    it('should return the number if only single number is passed', () => {
        expect(add('2')).toBe(2);
    });

    it('should return the addition of numbers seperated by comma in input string', () => {
        expect(add('2,3,4')).toBe(9);
    });
})