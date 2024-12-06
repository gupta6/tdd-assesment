function add(inputString){
    if(inputString === ''){
        return 0;
    }

    let delimiter = '';
    let input = inputString;

    if(inputString.startsWith('//')){
        const delimiterEndIndex = inputString.indexOf('\n');
        input = inputString.substring(delimiterEndIndex+1);

        for(let i=2; i<delimiterEndIndex; i++){
            if(inputString[i]!=='[' && inputString[i]!==']'){
                delimiter += inputString[i];
            }
        }
    }

    const splitter = new RegExp(`[,\n${delimiter}]`, 'g');
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