# break 멈추기 / countinue 계속진행(다음턴으로 건너뛰기)

i = 1
while True:
    print(i)
    i=i+1
    if i== 5:
        break
print()

for i in range(100):
    print(i)
    if i== 7:
        break
print()

for i in range(1, 11):
    if i == 5:
        break #멈춰라
        print(i, end=" ")
print()   

for i in range(1, 11):
    if i == 5:
        continue #한턴 건너뛰기 skip
        print(i, end=" ")
print()  

i = 0
while i<10:
    i = i+1
    if i%2==0:
        continue
        print(i, end=" ")
print()
# 반복의 조건식이 거짓이 되는 케이스를 만드는 기준 변수의 변화는 continue 앞|뒤

# 메뉴 선택 반복 : 반복입력 q를 입력하면 종료
while True:
    cmd = input("명령어 입력(q입력시 종료):")
    break
    if cmd =='':
        continue #빈입력 무시
        print("입력한 명령어:", cmd)

# for else 해당 반복이 끝까지 다 돌면 else도 실행
for n in [1,3,5,7]:
    if n%2 == 0: #짝수면
        print("짝수발견")
        break
    # else 여기 들여쓰기 레벨에 쓰면 if에 엮인 else처리
else: #for에 엮인 else처리
    print("짝수가없다")