
// Example # 1;
// Suppose we want to write a function that calculates the sum of all numbers from 1 up to n (including n);
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i ++){
        total += i;
    }
    return total;
}
console.log(addUpTo(6));


// Example # 2;
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
console.log(addUpTo(100));

// How to check which one is faster with javaScript built in function?

var startingTime = performance.now();
addUpTo2(1000000000); // Given a large data
var endingTime = performance.now();
var mellisecons = 1000;
console.log(`starting time ${startingTime}`);
console.log(`ending time ${endingTime}`);
console.log(`Total running time: ${(endingTime - startingTime) / mellisecons} seconds.`);  