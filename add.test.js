const add = require('./add');

describe('add function', () => {
    it('should return 0 if input is empty', () => {
        expect(add('')).toBe(0);
    });
})