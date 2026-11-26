#퀴즈
# FizzBuzz 문제
# 1 ~ 100 까지 출력하면서
# 3의 배수는 Fizz, 5의 배수는 Buzz, 3과 5의 공배수는 FizzBuzz 출력 

'''
FizzBuzz 란? 1부터 숫자를 하나씩 증가시키면서 다음 규칙에 따라 출력하는 게임

3의 배수(조건) → Fizz(출력 결과)
5의 배수(조건) → Buzz (출력 결과)
3과 5의 공배수(조건) →FizzBuzz(출력 결과)
위 조건에 해당하지 않는 숫자(조건) →숫자 그대로 출력(출력 결과)
'''
print("1번 FizzBuzz 문제")
for i in range(1, 101): #1 ~ 100 까지 출력
    print(i, end=" ")

    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz") #공배수 조건은 가장 먼저 검사..

    elif i % 3 == 0:
        print("Fizz")

    elif i % 5 == 0:
        print("Buzz")

    else:
        print(i) 
print()

'''
if 조건1:
    실행문
elif 조건2:
    실행문
else:
    실행문
'''
