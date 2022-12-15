function Problem16(power) {

    let number = 2n ** 1000n;

    return number.toString().split('').map(x => parseInt(x)).reduce((x, y) => x+y);

}

module.exports = {Problem16};