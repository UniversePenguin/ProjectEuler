function Problem26() {

    let values = [];

    for (let i = 1; i < 1000; i++){
        values.push([i, longDivide(i), longDivide(i).length])
    }

    return values.sort((a,b) => b[2]-a[2])[0];

}

function longDivide (n) {
    let prevCounts = [];
    let prevResults = [];
    let count = 10;



    while (true) {

        if (prevCounts.includes(count)) {
            let repeatingStringLength = prevCounts.length - prevCounts.indexOf(count);
            let string = '0.'+prevResults.join('');

            string = string.substring(0, string.length-repeatingStringLength);

            let repeating = prevResults.join('').substring(prevResults.join('').length-repeatingStringLength);

            return repeating;

            //return `${string}(${repeating})`;
        }

        let goesInto = Math.floor(count/n);
        prevResults.push(goesInto);

        if (count - goesInto * n == 0) {

            return '0';

            //return '0.'+prevResults.join('');

        } else {

            prevCounts.push(count);
            count = count - goesInto * n;
            if (count < n) count *= 10;

        }
        
    }



}

module.exports = {Problem26};