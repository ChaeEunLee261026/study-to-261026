// quiz(261106)-01 quiz 

// 문제 1. 자기소개 정보 저장하기
const name = "홍길동"; 
let age = 25;
let height = 175.5;
let student = true;
let area = "서울";


/* 변수선언: 변수를생성
(const or let 키워드를 사용해 변수 식별자 지정)*/

// const : 상수선언_한번 할당 or 저장하면 값이 바뀌지 x
// let : 변수선언_할당 or 저장내용 수시 변경 가능


/* console.log() : 는 콘솔(Console)에 내용을 출력(Log)하라는 의미
when console.log() ? 
1. 변수에 값이 제대로 저장됐는지 확인할 때
2. 계산 결과를 확인할 때
3. 코드가 제대로 실행되는지 확인할 때
4. 오류가 발생한 위치를 찾을 때 */

console.log("이름:", name);
console.log("나이:", age);
console.log("키:", height);
console.log("학생 여부:", student);
console.log("거주 지역:", area);

age = 26;

console.log("변경된 나이:", age);

console.log(""); // 빈 줄 추가하기

// 문제 2. 변수의 값 변경하기

let price = 1000;
let quantity = 5;
const productName = "사과";

// 처음 값 출력
console.log("상품명:", productName);
console.log("가격:", price);
console.log("수량:", quantity);

// 가격과 수량 변경
price = 1500;
quantity = 10;

// 변경된 값 출력
console.log("변경된 상품명:", productName);
console.log("변경된 가격:", price);
console.log("변경된 수량:", quantity);

/* const productName = "사과"; → ex_"바나나";로 바꾸면 
   const_상수선언_한번 할당 or 저장하면 값이 바뀌지 x 오류남 */

console.log(""); // 빈 줄 추가하기


// 문제 3. 출력 결과 예측하기
// 변수 자체를 연결하는 것이 아니라, 들어 있는 현재 값을 대입하는 것

let a = 10;
let b = 20;
let c;

console.log(a);
console.log(b);
console.log(c);

a = 100;
b = a;

console.log(a);
console.log(b)

/* 
let a = 10;
let b = 20;

a = 100;
b = a;
이 코드를 순서대로 해석하면 다음과 같음

1. a에 10을 저장
2. b에 20을 저장
3. a의 값을 100으로 변경
4. a에 저장된 100을 b에 복사 

즉, b = a는 a라는 변수 자체를 b에 연결하는 것이 아니라 
a에 들어 있는 현재 값을 b에 대입하는 것 */

/* c가 undefined인 이유 : 

let c;
console.log(c);

여기서 c라는 변수를 선언했지만 값을 넣어주지 x */

console.log(""); // 빈 줄 추가하기

// 문제 4. 잘못된 변수명 수정하기

/* let 1name = "김철수"; // 숫자로 시작할 수 없음 → 오류
let user age = 30; // 중간에 공백을 사용할 수 없음 → 오류
let user-name = "이영희"; // 하이픈(-)을 사용할 수 없음 → 오류
let const = 100; 
예약어이므로 사용할 수 없음 → 오류
const라는 단어 자체는 사용할 수 있지만, 변수 이름으로는 사용할 수 없음
ex) const name = "홍길동";_const : 변수를 선언하겠다는 명령어
여기서 const는 변수는 이름이 아니라 JavaScript에 명령을 내리는 역할을 함!
let const = 100; 여기서 const는 변수이름으로 활용됨
let my_score = 95; // 밑줄(_) 사용 가능
let $price = 5000; // 달러 기호($) 사용 가능
let _count = 10; // 밑줄(_)로 시작 가능 */
// 107~118번까지 모든 주석 처리 이유 : 잘못된 변수 → 수정했을때 값 충돌되서


/* 잘못된 변수명 수정 
ex) 1name → userName
user age → userAge
user-name → userName2
const → constValue */

//수정한 모든 변수를 출력
let userName = "김철수";
let userAge = 30;
let userName2 = "이영희";
let constValue = 100;
// 정상적인 변수명 유지
let my_score = 95;
let $price = 5000;
let _count = 10;

// 모든 변수 출력
console.log("이름 1:", userName);
console.log("나이:", userAge);
console.log("이름 2:", userName2);
console.log("상수 관련 값:", constValue);
console.log("점수:", my_score);
console.log("가격:", $price);
console.log("개수:", _count);