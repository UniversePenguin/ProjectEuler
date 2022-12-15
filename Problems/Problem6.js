function Problem6(max) {
    if (!max) max = 100;

    let numbers = (Array.from({length:max},(v,k)=>k+1));

    let sumOfSquares = numbers.map(x => Math.pow(x, 2)).reduce((x, y) => x+y);
    let squaredSum = Math.pow(numbers.reduce((x, y) => x+y), 2);

    return squaredSum - sumOfSquares;
}

module.exports = {Problem6};