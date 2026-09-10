// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);

for(let i=0;i<n;i++){

    if(i < n/2)
        console.log(" ".repeat(n/2 - i) + "*".repeat(2*i + 1));
    else
        console.log(" ".repeat(i - n/2 + 0.5) + "*".repeat(2*(n - i) - 1)); // n이 홀수면 n/2는 x.5와 같은 홀수값이 되어서 0.5를 더함
}
    

// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".
