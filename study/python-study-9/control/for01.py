# for 반복문 range 0~4
# for변수 in range():

for i in range(5): #range는 범위를 나타냄 (5)라고 하면 0~4까지 표현
    print(i)
print()

for i in range(3,10): #3시작~10전까지 3~9표현
    print(i, end=' ') #한줄입력
print()

for i in range(0,20,2): #0시작~20전까지, 2표현
    print(i, end=' ')
print()


for i in range(10,0,-1): #10시작~0전까지, -1씩 감소
    print(i, end=' ')
print()

for i in reversed(range(0,10)): #0시작~10전까지의 값 출력 / reversed는 값을 거꾸로 출력
    print(i, end=' ')
print()

# 입력 활용
count = int(input("횟수입력:"))
for i in range(count):
        print(i, end=' ')
print()

# 합계 1~100
sum = 0
for i in range(1, 101):
    sum = sum + i
print('총합', sum)

# 반복문 사용 : 구조 자료형으로 사용가능_리스트, 튜플, 문자열, 시퀀스 사용 가능
fruits = ['사과', '바나나', '딸기']
for fruits in fruits:
    print(fruits)

for ch in 'Python':
    print(ch, end=' ')
print()

for i in range(len(fruits)) :
    print(i, fruits[i])
print()

for idx, item in enumerate(fruits): #인덱스, 값을 쌍으로 돌려줌
    print(idx, item)
print()

# 구구단 2단 출력
for i in range(1, 10):
    print(f'2 x {i} = {2*1}')
print()

# 안쓰는 값
for i in range(5):
    print('*', end='') # *모양 5개 출력
print()
