function Problem1(lessThanX) {
    if (!lessThanX) lessThanX = 1000;
    let numbers = [];

    for (let i = 1; i < lessThanX; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            numbers.push(i);
        }
    }

    let sum = 0;
    numbers.forEach(x => {
        sum += x;
    })

    return sum;
}

module.exports = {Problem1};