// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// for (초기문; 조건식; 증감문) {}

// i를 0부터 시작해,
// i가 5와 같거나 커질 때 까지 i를 1씩 늘리며 반복하겠다.
for (let i = 0; i < 5; i++) {
    console.log("Hello World");
}

// 백틱 - 입력 언어가 영어인 상태에서 esc 하단 원화 기호

// 구구단 7단을 출력해보자
let dan = 7;
for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
}

// 1 ~ 10까지의 누적합을 for문을 사용해 구하기
let sum = 0;
for (let i = 1; i <= 10; i++) {
    console.log(`${sum} + ${i} = ${sum + i}`);
    sum += i; // sum = sum + i
}

console.log(sum);
