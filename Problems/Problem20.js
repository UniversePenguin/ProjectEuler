function Problem20() {

    let number = factorial(100n).toString().split('').map(x => parseInt(x)).reduce((x, y) => x+y);

    return number;

}

function factorial(n) {
    let product = 1n;
    for (let i = 1n; i <= n; i++) {

        product *= i;

    }
    return product;
}

module.exports = {Problem20};