function add(inputString){
    if(inputString === ''){
        return 0;
    }

    let delimiter = '';
    let input = inputString;

    if(inputString[0] === '/' && inputString[1] === '/'){
        delimiter = inputString[2];
        input = inputString.substring(3);
    }

    const splitter = new RegExp(`[,\n${delimiter}]`, 'g');
    const nums = input.split(splitter);

    if(nums.length === 1){
        return +nums[0];
    }
    
    return nums.reduce((acc, a) => acc+(+a), 0);
}

module.exports = add;