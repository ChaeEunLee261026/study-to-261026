// Iteration 반복문 (=iter)

console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log(""); // 빈줄 추가하기

/* for문(반복문)
for(초기화식;조건식; 증감식){
실행문;} 

순서 흐름 : 초기화식 → 조건식 → 실행 → 증감식
(참값이 나올때까지 / 참값이 나오면 실행)
*/

for(let i = 1; i<=10; i++){
    console.log('반복문 재밌다'); // true 케이스
}
console.log('반복문 for 끝남'); // false 케이스


/* let i=1;
if(i<=10)
console.log('반복문 재밌다');
i++; 
(true 케이스 / false값 나올때까지 위 명령문 반복) */

for(let i=1; i<3; i++){
    console.log('목마르다');
}
let i;
for(i=35; i<44; ++i){
    console.log('for 실행문');
}

console.log(i);

// i : 10~45 true / 50<50 false
for(i=10; i<50; i=i+5){
    console.log('i가 5씩 증가');
}

// 단순 몇회 반복 용도 : 
for(i=5; i>0; i--){
    console.log('다이어트 중');
}

console.log('다이어트 1일차');
console.log('다이어트 2일차');
console.log('다이어트 3일차');
console.log('다이어트 4일차');
console.log('다이어트 5일차');

for(i=1; i<=5; i++){
    console.log('다이어트 1일차');
}


//  실제 내부 실행문에 활용할 목적으로 값을 조정하면서 사용
console.log("----");
for(i=1; i<=5; i++){
console.log('다이어트' + i + '일차');
}


// 숫자의 총합
// 1~10총합
let number = 1+2+34+5+6+7+8+9+10;

number = number +1;
number = number +2;
number = number +3;


// 1~100 다 더하면 얼마?
let sum = 0; 
// 0은 덧셈에 영향을 안줌, 그래서 0으로 초기화
// 곱셈의 경우는 1로!

/* sum = sum +1;
console.log(sum); */
for(i=1; i<=10; i++){

}

// 반복문 다 돌고 sum변수에는 1~10까지의 누적 합 표기

// 총합
// 10 20 30 40~100 의 총합

sum = 0;
for(i=10; i<=100; i=i+10){
    sum = sum + i;
}
console.log('sum : ' + sum);

// 더하기 계산값 10 20 30 40 
// 반복문 기준값 1 2 3 
// 더할값 = 기준값 * 10

sum = 0;
for(i=1;i<=10; i++){
    sum = sum + (i*10);
} console.log('sum : ' +sum);


for(i=2; i<20; i=i*2){}

for(i=400; i>10; i=i-50){}

for(i=100; i>=90; i--){}