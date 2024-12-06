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

    it('should return the addition of numbers seperated by comma, new line in input string', () => {
        expect(add('2\n3,4,6\n15')).toBe(30);
    });

    it('should return the addition of numbers seperated by comma, new line and custom delimiter passed in input string', () => {
        expect(add('//[;]\n2\n3;4;6\n15,6')).toBe(36);
    });

    it('should throw an exception containing all the negative numbers if input string contains negative number', () => {
        expect(() => {add('//[;]\n2\n3;4;6\n1;5,-6')}).toThrow('negative numbers not allowed -6');
        expect(() => {add('//[;]\n2\n-3;4;-6\n1;5,-6')}).toThrow('negative numbers not allowed -3,-6,-6');
    });

    it('should return the addition of numbers only less than or equal to 1000', () => {
        expect(add('//[;]\n2\n3;4;6\n1;5,1003')).toBe(21); 
        expect(add('//[;]\n2\n3;4;6\n1;5,1000')).toBe(1021);
    })

    it('should allow delimiter of any length', () => {
        expect(add('//[***]\n1***2***3')).toBe(6);
    })

    it('should allow multiple delimiters', () => {
        expect(add('//[*][%]\n1*2%3')).toBe(6);
    })

    it('should work with custom delimiters as well as default', () => {
        expect(add('//[*****][%][^^^]\n1*****2%3,6\n9^^^12')).toBe(33);
    })
})