//Basic types of function
// 1 function without parameter & without return type
// 2 function with parameter & without return type
// 3 function without parameter & with return type
// 4 function with parameter & with return type
// 1 function without parameter & without return type
function add1() {
    console.log("Funct. has 1st type is called...");
}
// add1();
// 2 function with parameter & without return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(2,3);
// 3 function without parameter & with return type
function add3() {
    return (3 + 3);
}
var res = add3();
// console.log("Result is "+res);
// 4 function with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log("Addition is " + add4(8, 7));
