const fs = require('fs');

let problems = Object.assign({}, ...(fs.readdirSync('./Problems').map(x => require(`./Problems/${x}`))));
let time = Date.now();

console.log(problems['Problem31']());

console.log(`Ran in ${Date.now()-time}ms`);