function Problem28() {

    let l = 1001;
    
    let oddSquares = [];
    for (let i = 3; i <= l; i+=2) {
        oddSquares.push(i**2);
    }

    let corners = [1];

    for (let i = 0; i < oddSquares.length; i++) {

        for (let j = 0; j < 4; j++) {

            corners.push(oddSquares[i] - (j * (Math.sqrt(oddSquares[i])-1)))

        }

    }


    return corners.reduce((x,y) => x+y);

}

module.exports = {Problem28};