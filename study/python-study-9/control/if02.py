x = 5
if x == 10:
    print('10입니다')
else: #이외에 그게 아니면 :
    print("10이 아니네요") #들여쓰기로 구분

    # 짝수 홀수 구분
    num = int(input("수입력:"))
if num%2 == 0:
    print('짝수')
else:
    print("홀수")

if num%2 == 1:
    print('홀수')
else:
    print("짝수")

# and or 연산자
x = 10
y = 20
if x ==10 and y ==20:
    print('x 10 y 20')

if x > 10 or y > 10:
    print('10보다 큰게 있다')

score = 75 #0~100이 정상점수
if score >= 0 and score <=100:
    print('정상범위')
else:
    print("잘못된 범위")

if 0 <= score <=100:
    print('정상범위')
else:
    print("잘못된 범위")

# 삼항연산자
result = '합격' if score>=60 else '불합격' # (score>=50 ? "합격" : "불합격")
print(result)

if score >= 60:
    result = '합격'
else:
    result = '불합격'

# 사용자 입력값 활용
id_input = input("아이디:")
pw_input = input("비밀번호:")

if id_input == 'admin' and pw_input == '1234':
    print("로그인 성공")
else:
    print("아이디 비번 틀림")
