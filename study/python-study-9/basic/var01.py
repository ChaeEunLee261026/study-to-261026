#변수
# 변수명 = 값

x = 10
y = 3.14
name = "홍길동"
is_ok = True #python은 변수명에 $사용불가

print(x)
print(y)
print(name)
print(is_ok)
print(type(x),type(y),type(name),type(is_ok))

# 변수명
# 영문, 숫자, _(언더바) 특수문자 가능 / 숫자시작 불가
# 대소문자 구분(name과 Name은 다른변수로 받아들임)
# 키워드 사용불가(if for class)

# 변수명 짓는 스타일
# 자바, js → 카멜 케이스 → userName
# python → 스네이크 케이스 → user_name
user_name = "파이썬"
print(user_name)

# 변수에 값을 다시 저장하고 사용시 자료형이 바뀌어도 됨
x = 20
print(x, type(x))
x = '문자열 저장'
print(x, type(x))

# 여러변수 동시에 저장
a,b,c = 10,20,30
print(a,b,c)
d=e=f=9
print(d,e,f)

# 두 변수의 값 바꾸기
print(a,b)
a,b=b,a
print(a,b)

# 변수삭제
del d 
# print(d)

# 빈 변수 : None
z = None
print(z)

# 변수 계산
a=10
b=20
c=a+b
print(c)
c=a=+a+b+b
print(c)

# 복합대입연산자
a=a+5
a+=5
a-=3
a*=2
print(a)
a//=5 
print(a)

x=-10
print(-x)