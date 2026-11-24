# 리스트와 튜플

# 리스트(list) : 대활호[] 여러값 묶여서 저장

a = [12,34,67,22]
print(a)
print(type(a))

# 자료형 상관없이 함께 저장 가능
person = ["홍길동", 25 , 175.5, True]
print(person)

# 빈리스트
b = []
c = list()
print(b, c)

# range() 활용 리스트 만들기
print( list(range(10)) ) #0~9까지 표시
print( list(range(5, 12)) ) #5~11까지 표시
print( list(range(0, 20, 2)) ) #0~20미만의 짝수만 표시 (2씩증가)
print( list(range(10, 0, -1)) ) #10~1까지 역순으로 표시 (-1씩 감소)

# 튜플 : 소괄호() 묶어서 값을 저장, 생성 후 값 변경 불가! (const느낌)
t = (11,22,33,44)
print(t)
print(type(t))

t2 = 11, 22, 33 #이렇게해도 튜플로 저장됨
print(t2)

t3 = (38) #그냥 정수
print(t3)
t4 = (38,) #튜플로 인식
print(t4)

# 리스트 값 변경가능, 튜플은 값 변경 불가능
print(a[1])
print(t[2])
a[1]=99
print(a[1])
# t[2]=88  값 변경 불가능

# a:list t:tuple
# list tuole변환
print(tuple(a))
print(list(t))

print(list('hello')) #문자열 분해해서 한글자씩 리스트로

x, y, z = [10, 20, 30]
q, w =(40, 50)
print(x, y, z, q, w)