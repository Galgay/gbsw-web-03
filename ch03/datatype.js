let num = 10; // Number
num = -1;
num = 3.14;
num = "a" / 1; // NaN

let str = "문자열"; // String
let str2 = `문자열 ${num}`; // String

let bool = true; // Boolean
let bool2 = false; // Boolean

let n = null; // Null
let u = undefined; // Undefined

// 오브젝트
const a = {
    key: "value",
    key2: "value2",
};

// a = {}; // Error
a.key = "modified value";
console.log(a);

const arr = [1, 2, 3, 4]; // 배열
arr[0] = 3;
// arr = [] // Error
