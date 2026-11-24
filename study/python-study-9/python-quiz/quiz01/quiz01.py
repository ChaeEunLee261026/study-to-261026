# [파이썬 퀴즈1 - 입출력]

# 문제1)
# 사각형의 가로, 세로 길이를 한 줄에 공백으로 구분해서 입력 받고
print(10, end=' ')
print(5)
# 넓이와 둘레를 아래처럼 출력하세요.
# 입력 예) 10 5
# 출력 예)
# 넓이 : 50 가로*세로
# 둘레 : 30 (가로+세로)*2

extent = 50
print("넓이 : ", extent)
perimeter = 30
print("둘레 : ", perimeter)
print()

# 문제2)
# 국어, 영어, 수학 점수를 콤마로 구분해서 입력 받고
print(90,85,77, sep=', ')
# 총점과 평균(소수점 둘째 자리까지)을 출력하세요.
score1 = 90
score2 = 85
score3 = 77
total = score1 + score2 + score3
average = total/3

print("총점", total)
print("평균", format(average, ".2f"))
# print("평균", round(average, 2) ) 2자리수 반올림 (이방법도 가능)
print()

# 입력 예) 90,85,77
# 출력 예) 총점 252, 평균 84.0

# 문제3)
# 초(second)를 입력 받아서 '몇 시간 몇 분 몇 초' 로 출력하세요.
# 입력 예) 3725
# 출력 예) 1시간 2분 5초
seconds = int(input())
hour = seconds // 3600
minute = (seconds % 3600) // 60
second = seconds % 60
print(f"{hour}시간 {minute}분 {second}초")
print()
# 1초 1분=60초 5분=300초 1시간=60*60=3600초
# 3725초 → 1시간 125초남음 → 1시간 2분 5초


# 문제4)
# 년, 월, 일을 입력 받아서 sep 을 사용해 2026/11/02 형태로 출력하세요.
year = input()
month = input()
day = input()
print(year, month, day, sep="/")
# year, month, day = input("년 월 일 입력 : ").split()