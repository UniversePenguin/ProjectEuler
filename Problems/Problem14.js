function Problem14() {
    let numbers = (Array.from({length:1000000},(v,k)=>k+1)).map(x => [x, getChain(x)]);

    let max = 0;
    numbers.forEach(x => {
        if (x[1] > max) {
            max = x[1];
        }
    })

    return numbers.find(x => x[1] == max)[0];

}

function getChain(n) {
    let toReturn = [n];

    while (toReturn[toReturn.length-1] != 1) {
        let thisTerm = toReturn[toReturn.length-1];

        if (thisTerm % 2 == 0) {
            toReturn.push(thisTerm/2);
        } else {
            toReturn.push((3*thisTerm)+1);
        }

    }

    return toReturn.length;

}

module.exports = {Problem14};