// 문자열 내 특정 문자 제거하기
function solution(my_string, letter) {
    let answer = "";
    // my_string 내의 letter 일치하는 문자를 없애달라
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] != letter) {
            answer += my_string[i];
        }
    }

    return answer;
}

console.log(solution("abcdef", "f"));
