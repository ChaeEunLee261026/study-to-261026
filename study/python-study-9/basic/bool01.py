# 불 자료형(bool) boolean 참 거짓을 나타냄
# True | False {첫글자대문자} / 소문자는 x

print(True,False)
# print(true,false) 소문자 인식 못함
print(type(True)) # <class 'bool'>

# 비교연산자 → True | False
print(10 == 10)
print(10 != 10)
print(10 > 20)
print(10 < 20)
print(10 >= 10)
print(10 <= 4)

# 문자열 비교
print('Python' == 'Python')
print('Python' == 'python')
print('Python' != 'python')

# 값 == 객체 비교 is
n1 = 1
n2 = 1.0
print(n1 == n2)
print(type(n1) == type(n2) )

print(n1 is n2)
print(type(n1) is type(n2) )

x = None
print(x == None)
print(x is None) # None 비교시 is

# 논리연산자 and or not
print(True and True)
print((1==1) and (2>1))
print(False or True)
print(not True)
print(not False)

age = 25
print(age >= 20 and age < 30)
print(20 <= age < 30) #파이썬은 허용

print(age > 10 or age < 100)

# 정수, 실수, 문자열 → bool
print(bool(1), bool(0)) # 참거짓으로 변환 가능 / True False /  1→True 1==1 1>0
print(bool(501), bool(-20))
print(bool(5.5), bool(0.0))
print(bool("a"), bool(" "), bool("") ) # 빈 문자열을 False
print(bool([]), bool([1,2,3]) ) # 빈 리스트를 False

# && || 연산자
print(False and 'abc')
print(True and 'abc') # { True && <요소> }
print(False or 'def')