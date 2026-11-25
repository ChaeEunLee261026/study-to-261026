# [파이썬 퀴즈4 - 조건문]

# 문제1)
# 나이를 입력 받아서 요금을 출력하세요.
# - 8세 미만 : 무료
# - 8 ~ 13세 : 650원  / if 8<=age<=13: 이렇게도 가능
# - 14 ~ 18세 : 1050원
# - 19 ~ 64세 : 1350원
# - 65세 이상 : 무료

# 나이&요금출력
print("1번 문제")
age = int(input("나이입력:")) #키 값 출력
if age < 8:
    print("무료")
elif age <= 13:
    print("650")
elif age <= 18:
    print("1050") 
elif age <= 64:
    print("1350") 
else:
    print("무료")    
print()

# 문제2)
# 년도를 입력 받아서 윤년인지 출력하세요.
# - 4로 나누어 떨어지고 100으로 나누어 떨어지지 않으면 윤년 (4,8,12,16,20..윤년 100년은 윤년x)
# - 또는 400으로 나누어 떨어지면 윤년
# (평년 : 365일_우리가 알고있는 1년 / 윤년 : 366일_기존 365+1)
'''
        %4    %100    %400    윤년여부
2004    o      x       x       o
2100    o      o       x       x
2400    o      o       o       o
2007    x      x       x       x
'''

# 년도입력
print("2번 문제")
year = int(input("년도입력:")) #키 값 출력
# 4로 나누어 떨어지고 → year % 4 == 0 '입력한 연도가 4로 나누어 떨어지는가?'를 확인하는 코드

# 윤년인지 확인
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    # 4로 나누어 떨어지면서 100으로는 나누어 떨어지지 않거나, 400으로 나누어 떨어지면 윤년
    print("윤년입니다.")
else:
    print("평년입니다.")
# %나머지 구하기, !=같지않다, and그리고(두조건 모두 참), or또는(둘중 하나라도 참)
print()

'''
참고수식_선생님 답안
year = int(input("년도입력"))
if year % 400 == 0:
    print("윤년")
elif year % 100 == 0:
    print("윤년X")
elig year % 4 == 0:
    print("윤년")
else:
    print("윤년x")

or 
if year%400 == 0 or (year%4==0 and (not year%100 ==0) ):
or
if year%400 == 0 or (year%4==0) and year%100 != 0):
    print("윤년")
else:
    print("윤년x") 라고도 표현 가능    
'''

# 문제3)
# 교통카드 잔액 9000원에서 나이에 따른 요금(문제1)을 차감하고
# 남은 잔액을 출력하세요.

# 카드잔액-나이에 따른 요금
print("3번 문제")
card_amount = 9000
# 1번 문제 답 가져오기
if age < 8:
    fare = 0
    print("무료")
elif age <= 13:
    fare = 650
    print("650")
elif age <= 18:
    fare = 1050
    print("1050") 
elif age <= 64:
    fare = 1350
    print("1350") 
elif age >= 65:
    fare = 0
    print("무료")    
else:
    print("해당사항없음")  

remaining_amount = card_amount - fare   #fare = 나이에 따른 요금
print("남은 잔액:", remaining_amount, "원")
print()

# 문제4)
# 세 정수를 공백으로 구분해 입력 받아서 가장 큰 수를 출력하세요. (max 함수 사용하지 않기)

print("4번 문제")
# 세 정수 입력받기
a, b, c = map(int, input("세 정수 입력: ").split())
# a, b, c = map(int, input().split()) 공백을 기준으로 여러 숫자 입력받기
if a >= b and a >= c:
    print("가장 큰 수:", a)
elif b >= a and b >= c:
    print("가장 큰 수:", b)
else:
    print("가장 큰 수:", c)