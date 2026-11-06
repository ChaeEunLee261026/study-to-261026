// oper02. js

let x = 10;

x = x + 10;
x = x - 5;
x = x / 3;

// 복합대입연산자
x += 10;
x -= 5;
x /= 3;
// *=
// %=

// 비교연산자 (값이 참 or 거짓으로 나옴)

// = : 대입연산자
// == : 값이 같은가?
// === : 값+타입까지 같은가?
//  != : 값이 다른가?
// > < : >= <=

x = 10;
let y = 10;
let z = '10';

console.log(x == y);
console.log(x != y);
console.log(x > 5);
console.log(x <= 20);

let r1 = x <= 20;
console.log(r1);

console.log(x == z);
console.log(x === z);

console.log(x === y);

// &&   ||   !
// and  or  not

/*
    조건1   조건2   결과
&&  true   true   true
    true   false  false
    false  false  false

||  true   true   true
    true   false  true
    false  true   true
    false  false  false

!   true          false
    false         true
*/

x = 10;
y = 20;

console.log(x > 5 && y > 0);
console.log(x == 1 || y === '20');
console.log(!true);

let b = false;
console.log(b);
console.log(!b);

console.log( ! (x > 5 && y > 0) );
console.log( ! (x > 5) && y > 0 );

// 삼항연산자
// (조건식) : 결과가 ture or false로 뜸
// (조건식) ? 항목1 : 항목2;
//           ture    false

console.log( x == 10 ? '10이랑 같음' : '10이랑 다름');
console.log( y == 10 ? '10이랑 같음' : '10이랑 다름');

let r2 = x + (x == 10 ? 10 : 20);
console.log(r2);

// 타입변환(형변환)
// string() : 문자로 전환
// number() : 숫자로 전환

let q = 10;
let w = '20';
let e = 30;

console.log(q + e); // 10 + 30
console.log(q + w + e); //10 + '20' + 30

console.log(q + String(e)); // 10+string(30) '30'
console.log(q + String(w)+e);

console.log(Number('12345'));
console.log(Number('12345.12345'));