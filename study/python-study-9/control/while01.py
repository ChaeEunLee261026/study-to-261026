# 초기화 → 조건식 → 코드실행문 → 증감식(변화식) → 조건식 → 코드실행문

i = 0
while i < 5:
    print(i)
    i = i + 1

i = 10
while i > 0:
    print(i, end = " ")
    i = i - 1
print()

# count = int(input('숫자입력:'))
count = 0
while count > 0:
    print(count, end=" ")
    count = count -1
print()

# 랜덤값 출력
import random
print(random.randint(1, 6)) #1~6사이의 랜덤값
print(random.randint(1, 45)) #1~45사이의 랜덤값

dice = 0
while dice != 3: #3처럼 특정 조건이 만족할때 끝(사전에 몇회 돌아라~ or 확정짓기 힘든경우)
    dice = random.randint(1,6) #주사위 굴리기
    print("dice:", dice)
print()

# 입력값이 0이 입력될때까지, 입력된 모든수의 합 출력
# breack사용
total = 0
# while 입력값 != 0: 이렇게도 가능
while True:
    num = int(input("숫자입력(0입력시 종료):"))
    total = total + num
    if num == 0:
        break
print('총합계', total)