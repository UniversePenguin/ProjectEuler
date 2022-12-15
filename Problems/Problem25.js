function Problem25(digits) {
    let numbers = [1n, 1n];

    while(numbers[numbers.length-1].toString().length < 1000) {
        numbers.push(numbers[numbers.length-1] + numbers[numbers.length-2])
    }

    return numbers.length;
}

module.exports = {Problem25};