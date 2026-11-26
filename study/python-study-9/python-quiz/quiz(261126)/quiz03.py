# #퀴즈
# [파이썬 퀴즈7 - 제어문 종합 : 업다운 숫자 맞추기 게임]

# 1 ~ 100 사이 랜덤 숫자를 하나 정하고
# 사용자가 숫자를 입력하면 'UP' / 'DOWN' 힌트를 주세요.
# 맞추면 몇 번 만에 맞췄는지 출력하고 종료합니다.

# +옵션1) 기회는 7번. 7번 안에 못 맞추면 정답을 알려주고 종료
# +옵션2) 1 ~ 100 범위를 벗어난 입력은 기회를 차감하지 않고 다시 입력 받기

print("업다운 숫자 맞추기 게임")

import random
answer = random.randint(1, 100) # random.randint() 컴퓨터가 랜덤 숫자를 정하도록 하는 기능
count = 0 #시도 횟수 초기화
correct = False #정답 여부 초기화 (옵션추가 부분)
# while True: 기존 명령문
while count < 7: #옵션추가 부분_카운트 7번(옵션1)
    user = int(input("1~100 사이의 숫자 입력: ")) #사용자 숫자 입력

    if user < 1 or user > 100: #옵션추가 부분(옵션2)
        print("1~100 사이의 숫자만 입력")
        continue

    count += 1 #시도 횟수 증가 (옵션 추가로 기존 +1 → += 1변경)
    if user < answer:
        print("UP")

    elif user > answer:
        print("DOWN")

    else:
        print("정답")
        print(count, "번 만에 맞혔습니다!")
        correct = True #옵션추가
        break

if correct == False: #7번 안에 맞히지 못한 경우
    print("기회를 모두 사용했습니다!")
    print("정답은", answer, "입니다.")
