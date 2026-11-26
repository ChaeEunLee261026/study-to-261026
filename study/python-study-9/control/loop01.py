# 중첩 반복문
# if 조건 : 
#     if 조건 :

for i in range(3):
    for j in range(4):
        print(i,j)
print()

for i in range(3):
    for j in range(4):
        print(i, end =" ")
print()

for i in range(3):
    for j in range(4):
        print(j, end =" ")
print()

# 원하는 모양으로 별 찍기(?)
for _ in range(5): # _는 값 없음을 나타냄
    print('*', end ="")
print()

for i in range(5):         #중첩될때 밖에는 '행'을 나타냄
    for j in range(5):     #중첩될때 안에는 '열'을 나타냄
        print('*', end = '')
    print()
print()

for i in range(3):       
    for j in range(10):     
        print('*', end = '')
    print()
print()

for i in range(3):
    print('*' * 10) # *모양 10번 반복
print()

for i in range(5):
    for j in range(5):
        if j <= i: #조건 달아주기
            print('*', end="")
    print()
print()
# 위아래 결과값 똑같음 / 실행코드만 다름
for i in range(5):
    print('*' * (i+1) )
print()

for i in range(5):
    for j in range(5):
        if i == j:
            print("*", end="")
        else:
            print(" ", end="")
    print()
print()

for i in range(5):
    for j in range(5):
        if j < 4 - i :
            print(" ", end="")
        else:
            print("*", end="")    
    print()
print()

# 중첩 반복문 구구단 출력 (2~9단표시, n*9번째까지)
for x in range(2, 10): #2~9단 표시
    for y in range(1,10): #1~9까지 
        print(f'{x} x {y} = {x*y}')
    print('-'*10)
print()