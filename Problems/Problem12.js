function Problem12() {
    let counter = 1;
    let toReturn;
    
    while (true) {
        let triangle = getNthTriangle(counter);
        let count = countOfFactors(triangle);
        if (count > 500) {
            toReturn = triangle;
            break;
        }
        counter++;
    }

    return toReturn;

}

function getNthTriangle(n) {
    return n * ((n+1)/2)
}

function countOfFactors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n)+1; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    return (Number.isInteger(Math.sqrt(n)) ? count*2-1 : count*2);
}

module.exports = {Problem12};