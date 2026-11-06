//  조건문 if문 (만약에 ~라면)
// if (조건식) {실항핼 코드} → 조건식이 참(true)면 실행


let num = 15; //변수이름(number)
// 전역변수 (전체 영역에서 확인할 수 있는 변수)

if(num > 5) {
    console.log('num이 5보다 크다');
    console.log('if문 {} 안에 코드 실행');
}

if(num >=10)
    console.log('num이 10보다 크거나 같다');

if(num == 10) //중괄호를 제외하면 다음 한줄이 종속됨
    console.log('num이 10과 다르다1');

console.log('num이 10과 다르다2');
console.log('num이 10과 다르다3');


console.log(num);

let x = 3;
if(num > 0) {
    console.log('num이 0보다 크더라');
    // {}영역은 인식되는 지역을 구분
  
    let x = 10; // 이 지역내에 x값
    console.log(x);
     x = 50;
     console.log(x);

    // let y =33;
    y = 33;

    y = y + 7;

    console.log(y);

}
console.log(x);
console.log(y);

// if(조건식_결과가 true false) {}

x=3;
let b1 = (x <10); 

if(x < 10){
    console.log('111');
}

if(b1 == true){
    console.log('222');
}

if(b1){
    console.log('333');
}

// ex_if( 늦게일어났나? && 버스 배차가 먼가? && 내가 다리를 다쳤나)

// if else
let z = 10;
if(z > 10){
    close.log('z가 10보다 크다');
// } else{위 조건식 거짓이면 실행 (그게 아니면)
// z가 10보다 작다
console.log('z가 10보다 크지 않다') // z가 10이거나 10보다 작다
}
