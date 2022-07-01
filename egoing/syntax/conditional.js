var args = process.argv;
console.log(args[2])
console.log('A');
console.log('B');

// run `node conditional.js 5555` from terminal
if (args[2] == 5555) {
    console.log('C1');
}
else {
    console.log('C2');
}

console.log('D');