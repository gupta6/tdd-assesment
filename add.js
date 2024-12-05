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
    let negativeNums = '';
    let sum = 0;

    nums.forEach(num => {
        if(+num < 0){
            negativeNums += `${negativeNums.length ? ',': ''}${num}`;
        }
        else{
            sum += (+num);
        }
    })

    if(negativeNums.length){
        throw new Error(`negative numbers not allowed ${negativeNums}`);
    }
    
    return sum;
}

module.exports = add;