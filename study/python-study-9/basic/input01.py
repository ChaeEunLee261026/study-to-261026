# input

print("input01.py")
# input() 사용자 입력한 값을 문자열로 돌려주는 기능

# x=input("이름을 입력하세요 :")
# print("안녕하세요 : ",x)

# a = input("첫번째 숫자 : ")
# b = input("두번째 숫자 : ")
# print( a + b)
# print( type(a) )

# # a = int(input("첫번째 숫자 : "))
# print( int(a) + int(b) )

# 입력 값을 변수 두개에 나눠서 저장 : split()
print( ("10 20 30").split() )
print( ("10/20/30").split('/') )

c, d = input("숫자 두개 공백으로 띄워서 입력 : ").split()
print(c, d)
print( type(c) )
print(int(c) + int(d))
c = int(c)
d = int(d)

# map(함수, 대상) 뒤 대상에게 한번씩 함수를 적용
e, f = map(int, input("숫자 두개 공백으로 띄워서 입력 : ").split()) #"10", "20"
print(e+f)
print(type(e))

g, h, i = map(int, input("숫자 세개 ,로 구분해서 입력 : ").split(',')) #10,20,30
print(g+h+i)