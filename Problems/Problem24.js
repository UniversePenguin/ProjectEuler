function Problem24() {

    let digits = [0,1,2,3,4,5,6,7,8,9];

    let nthPermute = (n, arr) => {
        return permutator(arr)[n-1].join('');
    }

    return nthPermute(1000000,digits);

}

const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
  }

module.exports = {Problem24};