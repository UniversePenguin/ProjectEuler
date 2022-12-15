function Problem15(dimensions) {
    if (!dimensions) dimensions = 20;
    dim = dimensions + 1;

    let paths = factorial(2 * (dim - 1))/(factorial(dim-1) * factorial(dim-1))

    return paths;

}

function factorial(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

module.exports = {Problem15};