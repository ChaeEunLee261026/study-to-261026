/* js 함수
함수는 변수에 담을 수 있음
js에서는 함수도 매개변수에 전달 가능 */

function func01(a){
    console.log(a);
}
func01(1233);

function func02(f){ // f:함수
console.log('func02()');
f(); // 함수호출 f가함수
}

const temp1 = ()=>{
console.log('temp1() 함수 실행');
}

const temp2 = ()=>{
console.log('temp2() 함수 실행 temp2()');
}

// func02( temp1(); temp1()함수 호출 후 남은 return값을 넘김
// consle.log(  temp1() );

func02(temp1);
func02(temp2);

/* 콜백함수(callback) 나중or특정시점에 실행할 함수
ex_함수 A(디저트 주문)
   함수 B(음식 주문)

디저트주문() 음식주문()
음식주문() 디저트주문()

음식주문(디저트주문)
{음식주문관련코드 → 디저트 주문() } */

function orerFood(func){
console.log('음식주문');
console.log('음식수령');
console.log('음식정리');
func(); // 매개변수 함수 호출
}
function orerDessert(){
console.log('디저트 주문');
console.log('디저트 먹기');    
}

orerFood(orerDessert);
// orerDessert();
console.log(""); // 빈줄 추가하기
console.log("");

// --
// 예약 → 예약완료 안내
const reserve = (name, callback)=>{
    console.log('예약종류 확인');
    console.log('예약가능 여부 확인');
    console.log('예약 스케줄 조정');

     console.log(name + '님 예약 가능 확인 → 예약 완료');
     console.log('예약 완료 안내');
     callback(); //전달된 콜백함수 실행
}
const sendMsg = ()=>{
    console.log('sms 문자로 안내해주기, 문자전송');
}
reserve('김부장', sendMsg);

function callInfo(){
    console.log('전화로 직접 정보 안내해주기');
}
reserve('최이사', callInfo);

reserve('이사장', ()=>{
    console.log('카톡으로 안내해주기');
}); //함수 선언 바로 가능
console.log(""); // 빈줄 추가하기

// --
// return에 함수 활용
function fnc1(){
    let x = 10;
    x = x + 20;
    return x;
}
let r1 = fnc1(); // return값이 있음
console.log(r1);

function fnc2(){
    let y = 30;
    console.log('fnc2() 실행됨');
    return()=>{
    console.log('fnc2()에서 return한 함수 호출');    
    }
}

const rf2 = fnc2(); // r: resert, f:function
rf2();

function fnc3(){
    return(x)=>{
    console.log('fnc3()에서 return한 함수');
    console.log('매개변수 x : ' + x);
    }
}
const rf3 = fnc3();
rf3(1234);