# TDD Kata 1 - String Calculator

## Introduction

This project is a simple implementation of a **String Calculator** following the principles of **Test-Driven Development (TDD)**. The objective is to build a calculator that can handle input in the form of strings and return the sum of the numbers.

## Requirements

1. **Add Method**: The main method `add()` takes a string of numbers separated by commas, newline characters, or custom delimiters and returns the sum of the numbers.
2. **Delimiters**: By default, the calculator will use commas or newlines as delimiters. However, you can specify custom delimiters with a specific format.

## Steps to Complete

1. Write tests first for the expected functionality of the string calculator.
2. Implement the code to pass those tests.
3. Refactor the code for better design and readability.

## Instructions

1. **Basic functionality**:
   - The calculator can take a string of numbers and return their sum. For example:
     - `"1,2"` should return `3`.
     - `"1\n2\n3"` should return `6`.
   
2. **Custom Delimiters**:
   - Support for custom delimiters should be added.
   - The custom delimiter is specified in the first line of the input in the format:
     - `"//[delimiter]\n[numbers]"`.
     - For example, `//;\n1;2` should return `3`.

3. **Negative Numbers**:
   - The calculator should throw an error if any negative numbers are included in the input. For example:
     - `"1,-2,3"` should throw an error with a message `"negative numbers not allowed: -2"`.

4. **Ignore Numbers Greater Than 1000**:
   - Numbers greater than 1000 should be ignored. For example:
     - `"2,1001,3"` should return `5`.

## Running the Tests

To run the tests for this project:

1. Install dependencies using:
   npm install
2. Run tests using
   npm test
