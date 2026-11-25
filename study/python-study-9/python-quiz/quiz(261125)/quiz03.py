# [파이썬 퀴즈5 - 반복문]

# 문제1)
# 단을 입력 받아서 구구단을 출력하세요. (for 사용)
# 입력 예) 7
# 출력 예) 7 * 1 = 7 ... 7 * 9 = 63

# 구구단 7단 출력
print("1번 문제")
for i in range(1, 10):
    print(f'7 x {i} = {7*i}')
print()

# 문제2)
# 1 부터 입력한 수까지의 짝수 합과 홀수 합을 각각 출력하세요.

'''
# 짝수
if i % 2 == 0:

# 홀수
if i % 2 != 0:
'''
print("2번 문제")
number = int(input("숫자 입력: ")) #값 출력
# 짝수 합과 홀수 합 초기화
even_sum = 0
odd_sum = 0
# 1부터 입력한 숫자까지 반복
for i in range(1, number + 1):
    if i % 2 == 0:
        even_sum += i
    else:
        odd_sum += i
print("짝수 합:", even_sum)
print("홀수 합:", odd_sum)
print()

# 문제3)
# x = [49, -17, 25, 102, 8, 62, 21]
# 리스트의 각 요소에 10을 곱한 값을 한 줄에 출력하세요.

print("3번 문제")
x = [49, -17, 25, 102, 8, 62, 21]
for i in x:
    print(i * 10, end = " ")
print()
print()

# 문제4)
# 잔액 13000원 교통카드에서 1350원씩 차감하면서 잔액이 1350원 미만이 될 때까지
# '남은 잔액' 을 출력하세요. (while 사용)

print("4번 문제")
total = 13000
money = total - 1350
while total >= 1350: #잔액이 1,350원 이상이면 반복
    total = total - 1350 #잔액에서 1,350원 차감
    print("남은 잔액:", total, "원")
print()

