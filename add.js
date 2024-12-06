function add(inputString){
    if(inputString === ''){
        return 0;
    }

    const delimiters = [];
    let input = inputString;

    if(inputString.startsWith('//')){
        const delimiterEndIndex = inputString.indexOf('\n');
        input = inputString.substring(delimiterEndIndex+1);
        let delimiter = '';

        for(let i=2; i<delimiterEndIndex; i++){
            if(inputString[i]!=='[' && inputString[i]!==']'){
                delimiter += inputString[i];
            }
            if(inputString[i] === ']'){
                delimiters.push(delimiter);
                delimiter = '';
            }
        }
    }

    const splitter = new RegExp(`[,\n${delimiters.join('')}]`, 'g');
    const nums = input.split(splitter);
    let negativeNums = '';
    let sum = 0;

    nums.forEach(num => {
        if(+num < 0){
            negativeNums += `${negativeNums.length ? ',': ''}${num}`;
        }
        else if(num <= 1000){
            sum += (+num);
        }
    })

    if(negativeNums.length){
        throw new Error(`negative numbers not allowed ${negativeNums}`);
    }
    
    return sum;
}

module.exports = add;