
//  .js 파일
//  javascript 작성영역

console.log('basic01.js');
console.log('text');
console.log('이 영역에 있는 값을 출력');

// 변수 선언 (변수란 장바구니와도 같음_저장공간)

// 변수 타입
// var ler const

// 변수선언 : let (할당 or 저장내용 수시 변경 가능)
// 상수선언 : const (한번 할당 or 저장하면 값이 바뀌지 x)

// 프로그램에서 =는 '대입연산자'의 의미X_'저장연산자'로써의 의미
// js에서 ;은 문장 끝남을 나타냄

// 식별자(변수)명명 규칙
// 식별자(변수)에 키워드 사용 불가 ex) var, let, const
// 식별자(변수)에 공백포함 불가 ex) my school / _(언더바는 사용 가능)
// 식별자(변수)의 첫 글자는 영문 소문자, _(언더바), $기호만 사용 가능
// 식별자(변수) 숫자 시작불가, 예약어(키워드)불가

// 변수명을 짓는 관래
/* 
    like food (X)
    like_food   snake case 
    likeFood    camel case (카멜표기법)

    my bag price
    my_bag_price (언더스코어 표기법 : 상수명 작성시 사용)
    myBagPrice (카멜표기법 : 변수명과 함수명 작성시 사용)

    */

// 숫자 문자 논리형 등

let a = 10; // 숫자타입 정수형
let b = 20.321; // 숫자타입 실수형
let c = "안녕하세요"; // 문자타입
let d = '반갑습니다';
let e = true; // 참
let f = false; // 거짓

// let g = 헬로;
let v1 = 123; // 변수선언 + 값 저장 : 변수 초기화
let v2 = 0;
let v3 = null;
let v4 = undefined;
let v5; // 변수선언

// 변수선언시, 이름 겹치면 안됨!
// ex) let v1, let v1 (x) / let v1=123; → let v1=1234; (이건가능)

// var 중복선언 오류 발생x
// 오류를 발생시킬 리스크 큼 → 그래서 var대신 let사용할 것!

const g = 30;
const h = "헬로";

a = 20;
// g = 300; const 변수 →  상수형 변수로 값 변경 불가

console.log(201231);
console.log('abcd');
console.log("abcd");
console.log('안녕 "상당히" 반가워');
console.log("안녕 \"상당히\" 반가워");
console.log(`백틱문자로하면 중간에 '작은' "큰" 상관없음`);

let x = 20;
let y;

console.log(x);
console.log(y);