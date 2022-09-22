"use strict";
// Basic Types
let id = 5;
let company = 'Company name';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hi'];
// Tuple
let person = [1, 'Ali', true];
// Tuple Array
let employee;
employee = [
    [1, 'Ali'],
    [2, 'Maher'],
    [3, 'Mohammed']
];
// Union
let pid;
pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'Loli'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
