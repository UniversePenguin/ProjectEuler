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

function Problem23() {

    let numbers = [];
    for (let i = 1; i <= 28123; i++) {
        numbers.push(d(i));
    }

    let abundants = numbers.map((x, i) => (i+1 < x ? i+1 : 0)).filter(x => x!=0);

    let sum = 0;

    for (let i = 1; i <= 28123; i++) {
        if (!checkSumOfTwo(i, abundants)) {
            sum += i;
        }
    }

    return sum;

}

function checkSumOfTwo(value, abundants) {

    let lessThanValue = abundants.filter(x => x < value);

    for (let i = 0; i < lessThanValue.length; i++) {
        if (lessThanValue.indexOf(value - lessThanValue[i]) != -1) return true;
    }

    return false;

}

module.exports = {Problem23};