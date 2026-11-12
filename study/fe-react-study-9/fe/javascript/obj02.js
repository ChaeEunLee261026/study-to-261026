/* object 객체
자바스크립티의 자료형
*/

let x = 10; //단일변수
let arr = [1,2,3,4]; //배열

/* 객체(index가 아닌 key로 나타냄)
폼에서 많이 씀(양식, 설문지 등)
{key:value, key:value, key:value}

인터넷(HTTP)통신_데이터를 전달(송수신/주고받기)
JSON
JavaScript Objet Natation

Java에 Map 자료형과 비슷하며, Python에서는 Dictionary자료형과 비슷

ex) let 이름 = 
    let 주소 = 로 쓰는게 아닌,

    {
    이름 :
    주소 :
    전화번호 :
    } 이렇게 양식으로(?) 작성 후 관리 

*/

// key:value
let weatherInfo = {
    day : '261111',
    weather : '맑음',
    temperatuer : 8,
    location : '원성동',
    hasFog : false
};

console.log(weatherInfo);
console.log(weatherInfo.day);
console.log(weatherInfo.location);
console.log(weatherInfo.hasFog);
console.log("") //빈줄 추가하기

let weatherInfo2 = { //객체요소라 복붙 가능(필요부분만 수정 후 사용)
    day : '261112',
    weather : '흐림',
    temperatuer : 8,
    location : '원성동',
    hasFog : false
};

console.log(weatherInfo2);
console.log(weatherInfo2.day);
console.log(weatherInfo2.location);
console.log(weatherInfo2.hasFog);
console.log("") //빈줄 추가하기

// --

let lunchInfo = {
    menu : '짜장면',
    price : 5000,
    shop : '대천반점',
    location : '시장내부'
};
console.log(lunchInfo);
console.log(lunchInfo.menu);
console.log(lunchInfo.price);
console.log(lunchInfo.shop);
console.log(lunchInfo.location);
console.log("") //빈줄 추가하기

/*
key:value
키 : 문자형
키 : 숫자형
키 : 논리형 모두 가능

키 : {}  //객체타입+인덱스값[]
키 : []  //배열타입+키값(속성 이름으로 접근)
*/

let shopInfo = {
    name : '대천반점',
    location : '시장내부',
    menu : ['짜장면', '짬봉', '잡채밥', '우동'] //배열표시
};
console.log(shopInfo);
console.log(shopInfo.location);
console.log(shopInfo.menu);
console.log(shopInfo.menu[2]); //특정 개체를 선택할때 [인덱스값입력]
// 인덱스는 0 1 2 3 4 순으로 시작
console.log("") //빈줄 추가하기


let shopInfo2 = {
    name : '대천반점',
    location : '시장내부',
    menu : ['짜장면', '짬봉', '잡채밥', '우동'],
    price : [5000, 7000, 8000, 6000]
};
console.log(shopInfo2.menu[0]);
console.log("") //빈줄 추가하기


let shopInfo3 = {
    name : '대천반점',
    location : '시장내부',
    menu : [
        {name : '짜장면', price : 5000},
        {name : '짬뽕', price : 7000},
        {name : '잡채밥', price : 8000},
        {name : '우동', price : 6000}
    ]
};

console.log(shopInfo3.menu[0]);
console.log(shopInfo3.menu[2].price);
console.log(""); // 빈 줄 추가하기

// 중첩 객체(Nested Object) 
let shopInfo4 = {
    name:'대천반점',
    location:'시장내부',
    address: {
        postCode: 51211,
        addr1:'천안시',
        addr2:'동남구'
    }, // address는 배열이 아니라 객체(Object)
    menu: [
        {
            name:'짜장면',
            price:5000,
            raw:['양파', '돼지고기', '춘장']
        },
        {
            name:'잡채밥',
            price:7000,
            raw:['양파', '잡채', '밥']
        },
        {
            name:'우동',
            price:5000,
            raw:['양파', '호박', '옥수수면']
        },
        {
            name:'울면',
            price:7000,
            raw:['새우', '호박', '파', '면', '당근']
        }
    ]
};
console.log(shopInfo4.menu[0]);
console.log(shopInfo3.menu[2].price);

console.log(shopInfo4.menu[2]);
console.log(shopInfo3.menu[2].price);
console.log(""); // 빈 줄 추가하기

//주소가 어느시에 있는지 출력
console.log(shopInfo4.address.addr1);

//잡채밥이 들어있는 객체 출력
console.log(shopInfo4.menu[1]);

//우동의 원재료들만 출력
console.log(shopInfo4.menu[2].raw);

//울면안에 있는 재료 중 "파"만 출력
console.log(shopInfo4.menu[3].raw[2]);
console.log(""); // 빈 줄 추가하기



let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        { 
            name:'싸이버거',
            price: 6000,
            raw: ['빵', '채소', '닭다리살']
        },
        {
            name:'휠렛',
            price:7000,
            raw: ['빵', '채소', '닭가슴살']
        }
    ]
}
];

//휠렛버거의 가격
console.log(shopList[1].menu[1].price);

//볶음밥의 재료들
console.log(shopList[0].menu[2].raw);

//싸이버거에 들어있는 닭다리살 재료
console.log(shopList[1].menu[0].raw[2]);

//대천반점의 위치
console.log(shopList[0].location);
    
//대천반점 짬뽕 객체
console.log(shopList[0].menu[1]);