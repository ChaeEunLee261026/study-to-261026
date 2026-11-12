// function 함수
// 동작, 기능을 나타낸 코드
// 매개변수, 리턴 포함

/* function 함수명(매개변수){
실행할코드;
return 리턴값;
} 

옵션에 따라 
매개변수 o or x
return  o or x
*/ 


// 매개변수 X & return X
function func01(){
console.log('func01 함수 실행됨');
console.log('함수 실행 코드 01');
} //함수선언 & 코드정의 상태

// 함수호출(call), 함수호출은 괄호까지 들어가야함!
func01();
func01();
func01();

// 매개변수 o & return X
function func02( name)// 매개변수 역할을 할 변수 이름 설정
{console.log('func02 함수 실행됨');
console.log('매개변수 : ' + name);
}
func02(); // 함수호출() 매개변수에 들어갈 값을 전달하지x (undefined로 표기)
func02(1234); // 부르는 시점에 전달 후 저장(시점에 따라 달라질 수 있음)
func02('코카콜라');
// 매개변수는 여러개를 쓰면, 여러개가 될 수 있음

function func02_2(a,b){ // 매개변수가 2개
console.log('func02_2 함수 실행됨');
console.log('매개변수 a : ' + a);
console.log('매개변수 b : ' + b);
}

func02_2(10, 20);
func02_2('콜라', '사이다');

// 매개변수 x & return o
function func03(){
    console.log('func03 함수 실행됨');
    console.log('func03 리턴 500');
    return 500;
} // 함수선언, 코드정의 

func03(); // 함수 호출

let temp = func03();
console.log('func03의 return값 : ' + temp);
console.log('func03의 return값 : ' + func03());
// 리턴값이 있어야 결과값 출력

console.log('func01의 return값 : ' + func01());
// func01()은 리턴값이 없음


// 매개변수 0 & return o
function func04(n){
    console.log('func04 함수 실행');
    console.log('넘겨준 값을 * 10 해서 돌려줌');
    return n * 10;
}
func04(10);
let result = func04(5);
console.log(result);

console.log(func04(50));
console.log(func04(123));
// 내가 넘겨준 값 *10
