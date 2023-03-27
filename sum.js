let sum = (n1, n2) => n1 + n2;

let [,,n1, n2] = process.argv;
console.log(sum(+n1, +n2));