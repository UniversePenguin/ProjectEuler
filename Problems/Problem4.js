function Problem4() {
    let numbers = [];

    for (let i = 100; i <= 999; i++) {
        numbers.push(i);
    }

    let products = [];

    numbers.forEach(x => {
        numbers.forEach(y => {
            products.push(x * y);
        })
    })

    let palindromes = [];

    products.forEach(x => {
        let string = x.toString();

        if (string.length % 2 == 0) {

            if (string.substr(0, string.length/2) == reverse(string.substr(string.length/2, string.length-1))) {
                palindromes.push(x);
            }

        } else {

            if (string.substr(0, Math.floor(string.length/2)) == reverse(string.substr(Math.ceil(string.length/2), string.length-1))) {
                palindromes.push(x);
            }

        }

    })

    function reverse(x) {
        return x.split('').reverse().join('');
    }

    return palindromes.sort((a, b) => a-b)[palindromes.length-1];
}

module.exports = {Problem4};