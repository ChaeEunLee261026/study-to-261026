# 출력

# 콤마로 구분출력 ,사이에 공백
print(1,2,3)
print("Hello", "hi")

# 값 사이에 넣을 문자를 지정 sep 기본값: " " 공백 

print(1,2,3, sep=', ')
print(2025, 12, 11, sep="-")
print("Hello", "world", sep="")
print(1920, 1280, sep="x")

# 줄바꿈 문자 \n
print("하나\n둘\n셋")
print(1,2,3,4, sep='\n')

# print출력후 끝에 붙는 문자 : end (기본값 \n)
print("줄바꿈없음", end='')
print("다음줄 출력인가?")
print(1, end=' ')
print(2, end=' ')
print(3)

print("hi", "hello", "good", sep="~", end="!")
print()

# 문자열 숫자
age = 20
print("나이 : ", age)
# print("나이 : " + age) 값 출력 불가
print("나이 : " + str(age) ) #문자열로 변환해서

# f-string 문자열 내부에 변수 넣으면서 사용
name = '나네임'
print(name, "님 나이는 : ", age)
print(f'{name}님의 나이는 {age}세 입니다')
print(f'올해는 {age} 내년에는 {age+1} 입니다')