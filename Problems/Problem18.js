function Problem18() {
    let string = '75\n95 64\n17 47 82\n18 35 87 10\n20 04 82 47 65\n19 01 23 75 03 34\n88 02 77 73 07 63 67\n99 65 04 28 06 16 70 92\n41 41 26 56 83 40 80 70 33\n41 48 72 33 47 32 37 16 94 29\n53 71 44 65 25 43 91 52 97 51 14\n70 11 33 28 77 73 17 78 39 68 17 57\n91 71 52 38 17 14 91 43 58 50 27 29 48\n63 66 04 68 89 53 67 30 73 16 69 87 40 31\n04 62 98 27 23 09 70 98 73 93 38 53 60 04 23';
    //let string = '3\n7 4\n2 4 6\n8 5 9 3';

    let pyramid = string.split('\n').map(x => x.split(' ').map(x => parseInt(x)))

    let paths = [[0]];

    while (paths[0].length < pyramid.length) {
        let time = Date.now();

        let temp = [];
        paths.forEach(x => {
            temp.push(x.concat([x[x.length-1]]));
            temp.push(x.concat([x[x.length-1]+1]));

        })
        paths = temp;

        let elapsed = Date.now()-time;

        console.log(`Row ${paths[0].length} took ${elapsed}ms to be calculated.`);

    }

    paths = paths.map(x => {
        let sum = 0;
        for (let i = 0; i < x.length; i++) {
            sum += pyramid[i][x[i]];
        }
        return sum;
    })

    return Math.max(...paths);

}

module.exports = {Problem18}