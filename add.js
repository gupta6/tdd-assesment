function add(inputString) {
    // If input is empty, return 0 as the sum
    if(inputString === '') {
        return 0;
    }

    const delimiters = []; // Array to store custom delimiters
    let input = inputString; // Store the input string for further processing

    // Check if input starts with custom delimiter syntax (//)
    if(inputString.startsWith('//')) {
        const delimiterEndIndex = inputString.indexOf('\n'); // Find the index of newline after custom delimiter
        input = inputString.substring(delimiterEndIndex + 1); // Extract input string after custom delimiter line
        let delimiter = ''; // Variable to build each delimiter

        // Loop through the delimiter part to extract custom delimiters
        for(let i = 2; i < delimiterEndIndex; i++) { // Skip "//" and process characters between [ and ]
            if(inputString[i] !== '[' && inputString[i] !== ']') { 
                delimiter += inputString[i]; // Build delimiter string
            }
            if(inputString[i] === ']') { 
                delimiters.push(delimiter); // Store delimiter
                delimiter = ''; // Reset delimiter for next extraction
            }
        }
    }

    // Create a regular expression that includes commas, newline, and custom delimiters
    const splitter = new RegExp(`[,\n${delimiters.join('')}]`, 'g');
    const nums = input.split(splitter); // Split the input string into numbers based on delimiters
    let negativeNums = ''; // To store any negative numbers for error message
    let sum = 0; // Variable to store the sum of valid numbers

    // Loop through the split numbers
    nums.forEach(num => {
        if(+num < 0) { // Check if the number is negative
            negativeNums += `${negativeNums.length ? ',' : ''}${num}`; // Append negative numbers to the list
        } else if(num <= 1000) { // Only sum numbers less than or equal to 1000
            sum += (+num); // Add the number to the sum
        }
    });

    // If there are negative numbers, throw an error with the details
    if(negativeNums.length) {
        throw new Error(`negative numbers not allowed ${negativeNums}`);
    }
    
    return sum; // Return the computed sum
}

module.exports = add;
