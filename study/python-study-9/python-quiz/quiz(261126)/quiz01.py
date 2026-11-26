# [파이썬 퀴즈6 - 별찍기]
# 높이를 입력 받아서 아래 모양을 각각 출력하세요. (높이 5 예시)

# 문제1) 역삼각형
# ***** 5
# **** 4
# *** 3
# ** 2 
# * 1
print("1번 문제")
for i in range(6):
    for j in range(6):
        if j < 5 - i :
            print("*", end="")
        else:
            print("", end="")    #else_print부분은 없어도 결과에 영향을 주지 않음
    print()
print()

'''
참고수식_선생님 답안
# "*" * 5
for i in range(5, 0, -1): #i : 5 4 3 2 1 
    print("*" * i)
이렇게도 출력 가능
'''

# 문제2) 피라미드 / 피라미드를 만들려면 별 앞에 공백 필요
#     * 1
#    *** 3
#   ***** 5
#  ******* 7
# ********* 9
print("2번 문제")
for i in range(5): #피라미드 5줄을 의미(피라미드의 전체 줄 수 / 중첩될때 밖에는 '행'을 나타냄)
    for j in range(9): #한줄에 9칸을 의미(한 줄에 출력할 전체 칸 수 / 중첩될때 안에는 '열'을 나타냄)
        if j < 4 - i or j > 4 +i : # 별을 출력하는 조건이 아닌 공백을 출력하는 조건으로
            print(" ", end="") # " " 공백추가
        else:
            print("*", end="")    
    print()
print()

'''
i는 바깥쪽 반복문으로, 피라미드의 줄을 의미
j는 안쪽 반복문으로, 한 줄에 출력할 위치를 의미
print(" ", end="")는 공백 출력
print("*", end="")는 별 출력

√ 별 앞의 공백은 한 줄씩 줄어들고, 별의 개수는 한 줄씩 2개 증가! √

i 값    공백 개수   별 개수
0       4          1
1       3          3
2       2          5
3       1          7
4       0          9
'''

'''
참고수식_선생님 답안
fot i in range(5):
    for j in range(5):
        if j < 4 - i :
            print(" ", end="")
        else : 
            print("*", end="")

    for k in range(i):
        print("*", end="")
    print()

or

for i in range(5):
    for j in range(4-i) #띄어쓰기
        print(" ", end="")
    for k in range(2*i + 1):
        print("*", end="")
    print()
print()

이렇게도 출력 가능
'''

# 입력값에 따른 별 출력
print("입력값에 따른 별 출력")
n = int(input("숫자입력 :"))

for i in range(n):
    for j in range(n-i):
        print("*", end="")
print()

for i in range(n):
    print(' '*((n-1)-i) + '*'*(2*i + 1))