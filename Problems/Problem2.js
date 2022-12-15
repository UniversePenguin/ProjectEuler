function Problem2() {
    let numbers = [1, 2];

    while (true) {
        numbers.push(numbers[numbers.length-1] + numbers[numbers.length-2]);
        if (numbers[numbers.length-1] > 4000000) {
            numbers.pop();
            break;
        }
    }

    let evenNumbers = [];

    numbers.forEach(x => {
        if (x % 2 == 0) {
            evenNumbers.push(x);
        }
    })

    let sum = 0;
    evenNumbers.forEach(x => {
        sum += x;
    })

    return sum;
}

module.exports = {Problem2};