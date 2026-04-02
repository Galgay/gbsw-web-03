// 2단부터 9단까지 구구단 출력 (중첩 반복문)
for (let dan = 2; dan <= 9; dan++) {
    console.log(`${dan}단`);
    for (let num = 1; num <= 9; num++) {
        console.log(`${dan} x ${num} = ${dan * num}`);
        // console.log(dan + " x " + num + " = " + dan * num);
    }
    console.log("-----------");
}
