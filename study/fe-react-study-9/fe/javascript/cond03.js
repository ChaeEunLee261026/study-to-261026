/*
if()
if()
if()

else : 혼자사용 x / 앞에 if가 붙어야함
if else() : 사용가능
if else else() : 사용불가
if else if() : 사용가능(조건&조건)

*/

let dice = 5; // 주사위1~6
if (dice == 1)
    console.log('1칸 전진');

if (dice == 1) {
    console.log('1칸 전진');
} else {
    console.log('2칸 전진');
}


// dicd : 1~6만 가능하다고 보장
if (dice == 1) {
} else if (dice == 2) {
}
else if (dice == 3) {
}
else if (dice == 4) {
}
else if (dice == 5) {
}
else {}

if(dice == 1){}
if(dice == 2){}
if(dice == 3){}
if(dice == 4){}
if(dice == 5){}
if(dice == 6){}


// if 조건식 : 최종적으로 true or false 논리형 결과값 출력
//  하기의 비교로직 만들 수 있음
if(dice > 10){}
let result = dice ==3;

if(result){}
if(result == true){}
if(result == false){}
if(!result){}

if(! (result == true) ){}

if(dice > 0 && dice <= 6){} // 1~6 보장 조건
if(dice < 1 || dice > 6){} // 1~6 범위를 벗어나면 
if(! (dice < 1 || dice > 6) ){}
if( (dice < 1 || dice > 6) == false ){}
// && : 그리고(and)     || : ~이거나(or)

// switch (비교하려는 대상) {}
dice = 3;
switch(dice){
    case 1 : // dice == 1
    console.log('case 1');
    case 2 : // dice == 2
     console.log('case 2');
    case 3 : // dice == 3   
    console.log('case 3');
    case 4 :
    console.log('case 4');  
    break; // 해당구문까지 실행하겠다라는 의미(각 문단별로 나누면, 문단별 해당건만 표기)  
    case 5 :
    console.log('case 5'); 
    case 6 :
    console.log('case 6'); 
}
console.log(""); // 빈줄추가하기


switch(dice){
    case 1 : // dice == 1
    console.log('case 1');
    case 2 : // dice == 2
     console.log('case 2');
    case 3 : // dice == 3   
    console.log('case 3');
    case 4 :
    console.log('case 4');  
    break; // 해당구문까지 실행하겠다라는 의미(각 문단별로 나누면, 문단별 해당건만 표기)  
    case 5 :
    console.log('case 5'); 
    // case 6 : 
    default : // else
    console.log('case 6'); 
    break;
}
console.log(""); // 빈줄추가하기

/* if 조건 
ex) 출근시간 대비 해야할 일
8시 청소
9시 회의
10시 업무
11시 외근 */

let showtime = 8;

if(showtime == 8){
//  청소 회의 업무 외근
}else if(showtime == 9){
// 회의 업무 외근
}else if(showtime == 10){
// 업무 외근
} else{
// 외근
}

// 8.5 ? 
if(showtime <= 8){
    // 청소 회의 업무 외근
}
else if(showtime <= 9){}
else if(showtime <= 10){}
else if(showtime <= 11){}
else{} // 결근처리

// 논리적 오류 존재
if(showtime <= 11){
    // 외근
}
else if(showtime <= 10){} // 업무 외근
else if(showtime <= 9){} // 회의 업무 외근
else if(showtime <= 8){} // 청소 회의 업무 외근
else{} // 결근처리


if(showtime > 11){
    // 청소 회의 업무 외근
}
else if(showtime > 10){}
else if(showtime > 9){}
else if(showtime > 8){}
else{} // 결근처리



if(showtime <= 8){
// 청소
}
if(showtime <= 9){
// 회의
}
if(showtime <= 10){
// 업무    
}
if(showtime <= 11){
// 외근    
}

switch(showtime){
    case 8:
        // 청소
    case 9:
        // 회의
    case 10:
        // 업무
    case 11:
        // 외근
}

switch(showtime){
    case 8:
        // 청소
        // 회의
        // 업무
        // 외근
        break;
    case 9:
        // 회의
        // 업무
        // 외근
        break;
    case 10:
        // 업무
        // 외근
        break;
    case 11:
        // 외근
        // break;
}