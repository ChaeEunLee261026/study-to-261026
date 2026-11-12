/* JavaScript 배열 반복문 연습문제 (1~10번)

학습 목표
for, for...in, for...of, forEach()를 사용하여 배열의 인덱스와 값에 접근하는 방법을 연습합니다.

공통 조건
- 각 문제에서 지정한 반복문을 사용하세요.
- 결과는 console.log()로 출력하세요.

문제 1. [for문]
let scores = [10, 20, 30, 40, 50];
배열의 모든 값을 순서대로 출력하세요.

문제 2. [for문]
let numbers = [5, 10, 15, 20, 25];
배열의 모든 값을 2배로 만들어 출력하세요.

문제 3. [for문]
let scores = [70, 80, 90, 60, 100];
각 배열 요소의 인덱스와 값을 함께 출력하세요.
출력 예시: 0번 : 70

문제 4. [for문]
let numbers = [1, 2, 3, 4, 5];
배열의 값을 뒤에서부터 순서대로 출력하세요.

문제 5. [for...in]
let fruits = ['사과', '바나나', '포도', '딸기'];
각 요소의 인덱스만 출력하세요.

문제 6. [for...in]
let fruits = ['사과', '바나나', '포도', '딸기'];
인덱스와 값을 함께 출력하세요.
출력 예시: 0 : 사과

문제 7. [for...of]
let prices = [1000, 2000, 3000, 4000];
배열의 모든 값을 출력하세요.

문제 8. [for...of]
let numbers = [3, 6, 9, 12, 15];
각 값을 10 증가시켜 출력하세요.

문제 9. [forEach]
let scores = [50, 60, 70, 80, 90];
각 요소의 인덱스와 값을 출력하세요.

문제 10. [forEach]
let names = ['김철수', '이영희', '박민수'];
각 요소를 '1번 김철수'와 같은 형태로 출력하세요.
번호는 1부터 시작합니다. */

// 문제 1. 모든 값을 순서대로
console.log('문제 1. 출력값 : '); 

let scores = [10, 20, 30, 40, 50];
console.log(scores);
for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}
console.log("");

// 문제 2. 모든 값을 2배
console.log('문제 2. 출력값 : '); 

let numbers = [5, 10, 15, 20, 25];
for(let i=0; i<numbers.length; i++){
console.log(numbers[i] * 2);
}
console.log("");

// 문제 3. 각 배열 요소의 인덱스와 값
console.log('문제 3. 출력값 : '); 
let scores2 = [70, 80, 90, 60, 100];

for(let i=0; i<scores.length; i++){
    console.log( i + '번 : ' + scores2[i]);
}
console.log("");

// 문제 4. 배열의 값을 뒤에서부터 순서대로 출력
console.log('문제 4. 출력값 : '); 
let numbers2 = [1, 2, 3, 4, 5];

for(let i = numbers2. length -1; i >=0; i--){
    console.log(numbers2[i])
}
console.log("");

// 문제 5. 각 요소의 인덱스만 출력
console.log('문제 5. 출력값 : '); 

let fruits1 = ['사과', '바나나', '포도', '딸기'];
for(let i in fruits1){
    console.log(i); 
    // [i] → 배열의 인덱스(0, 1, 2, 3)
    // fruits1[i] → 배열에 들어 있는 값 (사과, 바나나, 포도, 딸기)
    /* 기존 console.log(fruits1[i]) 코드 작성이 아닌, 
        console.log(i)로 표시를 해야 각 요소의 인덱스만 출력됨! */
}
console.log("");


// 문제 6. 인덱스와 값을 함께 출력
console.log('문제 6. 출력값 : '); 

let fruits2 = ['사과', '바나나', '포도', '딸기'];
for(let i in fruits2){
    console.log(i + ' : ' + fruits2[i]);
}
console.log( '번 : ' + fruits2);
console.log("");

// 문제 7. 배열의 모든 값을 출력
console.log('문제 7. 출력값 : '); 

let prices = [1000, 2000, 3000, 4000];
for(let price of prices){
    console.log(price);
}
console.log("");

// 문제 8. 각 값을 10 증가시켜 출력 (값이상한데..?)
console.log('문제 8. 출력값 : '); 

let numbers3 = [3, 6, 9, 12, 15];
for(let number3 of numbers3){
    console.log(number3 + 10);
}
console.log("");

// 문제 9. 각 요소의 인덱스와 값을 출력
console.log('문제 9. 출력값 : ');

let scores3 = [50, 60, 70, 80, 90];
scores3.forEach(function(score, index){
    console.log(index + ' : ' + score);
});
console.log("");

// 문제 10. 각 요소를 '1번 김철수'와 같은 형태로 출력
console.log('문제 10. 출력값 : ');

let names = ['김철수', '이영희', '박민수'];
names.forEach(function(name, index){
    console.log((index + 1) + '번 ' + name);
});
console.log("");

/* 반복문
for : 인덱스를 직접 증가·감소시키며 반복
for...in : 인덱스(키)를 가져오며 반복
for...of : 배열의 값을 하나씩 가져오며 반복 */