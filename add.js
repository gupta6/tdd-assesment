function add(inputString){
    if(inputString === ''){
        return 0;
    }

    const nums = inputString.split(",");

    if(nums.length === 1){
        return +nums[0];
    }
    
    return nums.reduce((acc, a) => acc+(+a), 0);
}

module.exports = add;