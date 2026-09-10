// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

//내림차순 정렬을 위한 함수
function descend_comp(a, b){
    return b - a;
}

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
let x = scores.filter(n=> n % 2 === 1);  //leave only the odd scores
console.log("odds: ", x);

x = x.map((n) => n * 2); //double the odd scores
console.log("double the odds: ", x);

x.sort(descend_comp); //sort the array in descending order
console.log("sorted in descending order: ", x);

let y = x.slice(0, Math.ceil(x.length / 2)); //chop it into half
console.log("the first half: ", y); //math.ceil is used to contain the middle element when the number of elements is odd.

// (b)
const z = scores
    .filter((n) => n % 2 === 1)
    .map((n) => n * 2)
    .sort(descend_comp)
    .slice(0, Math.ceil(x.length / 2));

console.log("result using method chaining: ", z);

// (c)
console.log("end: ", scores);
//After all these operations, the array scores is still the same.
//The reason is because the array methods filter, map are all non-destructive and they return a new array(created).