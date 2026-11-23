# 숫자 정수형(int) 실수형(float) 연산자

# 사칙연산
print(1+1)
print(5-2)
print(3*4)
print(7/2)
print(4/2)

# 몫 나머지
print(7//2) #나눗셈 몫만 남김
print(7%2) #나머지

print(divmod(7,2)) #몫,나머지를 return

# 거듭제곱
print(2**5) #2의5제곱

#자료형 확인 : type()
print(type(10)) #<class 'int'> 정수형 인지
print(type(3.5)) #<class 'float'> 실수형 인지
print(type(4/2)) #<class 'float'> 실수형 인지
print(type(4//2)) #<class 'int'> 정수형 인지

# 정수 ↔ 실수 변환
print(int(3.5)) #정수형으로 변환_소수점 아래 버림
print(float(5)) #실수형으로 변환
# print('100'+1) #파이썬에선 문자열+숫자계산 x
print(int('100')+1)
print('100'+str(1)) #str은 문자열 형태로 변환

#실수계산
print(0.1+0.2)
print((0.1+0.2)==0.3)
print(round(0.1+0.2,2)) #round는 반올림 함수

#계산 우선순위
print(3+5*2)
print((3+5)*2)

#숫자 표기, 큰 수 계산
print(1234567*9876543)
print(1_000_000) #_(언더바)숫자 가독성 측면으로 사용하는 구분자
print(1,000,000)
print(10,20,30)