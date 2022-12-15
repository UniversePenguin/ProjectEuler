function d(n) {
    let toReturn = [];
    for(let i = 1; i < n; i++) {
        if (n % i == 0) {
            toReturn.push(i);
        }
    }
    if (toReturn.length < 1) return 0;
    return toReturn.reduce((x,y) => x+y);
}

function checkAmicable(value, numbers) {
    let d = numbers[value-1];

    if (d == value) return false;

    return numbers[d-1] == value;

}

function Problem21() {
    let numbers = [];
    for (let i = 1; i < 10000; i++) {
        numbers.push(d(i));
    }

    let amicables = [];
    for (let i = 1; i < 10000; i++) {
        if (checkAmicable(i, numbers)) amicables.push(i);
    }

    return amicables.reduce((x,y) => x+y);
}
module.exports = {Problem21};