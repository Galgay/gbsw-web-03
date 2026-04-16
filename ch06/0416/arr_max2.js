// 배열 내 원소 중 두 개를 곱해 만들 수 있는 최댓값을 구해라.
// 1. 배열 내 가장 큰 원소와, 그 다음으로 큰 원소 2개를 구하면 해결할 수 있는 문제
function solution(numbers) {
    // let max = -100000;
    // let max2 = -100000;
    // // 반복문을 이용해서 배열 순회
    // for (let i = 0; i < numbers.length; i++) {
    //     // 현재 보고 있는 원소가 max 값보다 크면 max 갱신
    //     if (max < numbers[i]) {
    //         max = numbers[i];
    //     }
    // }

    // numbers[numbers.indexOf(max)] = -9999;

    // // 반복문을 이용해서 배열 순회
    // for (let i = 0; i < numbers.length; i++) {
    //     // 현재 보고 있는 원소가 max2 값보다 크면 max2 갱신
    //     if (max2 < numbers[i]) {
    //         max2 = numbers[i];
    //     }
    // }
    // return max * max2

    // compare function (a, b)
    // 양수 -> b를 a보다 앞으로 정렬
    // 0 -> 아무 작업 X
    // 음수 -> a를 b보다 앞으로 정렬
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}
