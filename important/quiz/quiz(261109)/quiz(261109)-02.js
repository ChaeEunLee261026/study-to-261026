/* 반복문
 for.
        1) i가 0~10으로 11번 반복
        2) i가 1~9로 9번 반복
        3) i가 10 ~ 100 으로 10번 반복
        4) i가 25 50 75 100 해서 4번 반복
        5) i가 50 ~ 55로 6번 반복
        6) i가 10 ~ 1로 10번 반복
        7) i가 30 ~ 0으로 5씩 감소하면서 7번 반복
        8) i가 30 ~ 5으로 5씩 감소하면서 6번 반복
        9) i가 25 ~ 0으로 5씩 감소하면서 6번 반복 */

// 1) i가 0~10으로 11번 반복
console.log('1번 값');
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log(""); // 빈줄 추가하기

// 2) i가 1~9로 9번 반복
console.log('2번 값');
for(let i = 1; i <= 9; i++) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기

// 3) i가 10 ~ 100 으로 10번 반복
console.log('3번 값');
for(let i = 10; i <= 100; i += 10) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기

// 4) i가 25 50 75 100 해서 4번 반복
console.log('4번 값');
for(let i = 25; i <= 100; i=i+25) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기

// 5) i가 50 ~ 55로 6번 반복
console.log('5번 값');
for(let i = 50; i <= 55; i++) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기

// 6) i가 10 ~ 1로 10번 반복
console.log('6번 값');
for(let i = 10; i>=1; i--) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기

// 7) i가 30 ~ 0으로 5씩 감소하면서 7번 반복
console.log('7번 값');
for(let i = 30; i>=0; i=i-5) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기

// 8) i가 30 ~ 5으로 5씩 감소하면서 6번 반복
console.log('8번 값');
for(let i = 10; i<=5; i=i-5) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기

// 9) i가 25 ~ 0으로 5씩 감소하면서 6번 반복 
console.log('9번 값');
for(let i = 25; i>=0; i=i-5) {
    console.log(i);
}
console.log(""); // 빈줄 추가하기