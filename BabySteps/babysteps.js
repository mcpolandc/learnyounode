/*

    returns sum of number arguments passed
    
    e.g. node babysteps.js 1 2 3 (returns 6)

*/

var total = 0;

for (var i=2; i < process.argv.length; i++) {
    
    total += Number(process.argv[i]);
}

console.log(total);
