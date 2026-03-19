// And(&&) 연산 - 양 쪽 피연산자 모두 참(true)여야 true 반환
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// Or(||) 연산
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// Not(!) 연산
console.log(!true); // false
console.log(!false); // true

const age = 27;
// 조건
// 학생의 나이인지 구분해보자.
// 조건 1. 8세 이상
// 조건 2. 19세 이하
const result = age >= 8 && age <= 19 ? "학생입니다." : "학생이 아닙니다.";
console.log(result);

// Nullish 병합 연산자
// 좌항이 null 또는 undefined인 경우
// 우항을 반환하고, 그렇지 않은 경우 좌항을 반환한다.
let nickname = null;
console.log(nickname ?? "익명 사용자");
nickname = undefined;
console.log(nickname ?? "익명 사용자");
nickname = "서정민";
console.log(nickname ?? "익명 사용자");
