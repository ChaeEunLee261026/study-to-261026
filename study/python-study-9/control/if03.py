x = 10
if x < 10:
    print("10보다 작음")
elif x > 10:
    print("10보다 큼")
elif x == 0:
    print("0이다")
else:
    print("10인가?")

# 점수 학점
score = int(input("점수입력:")) #키 값 출력
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")

# 자판기 예제
# 사용자 번호 입력 1.콜라 / 2.사이다 / 3.환타
menu = int(input("1콜라 2사이다 3환타 :"))
if menu == 1:
    print("콜라")
elif menu == 2:
    print("사이다")
elif menu == 3:
    print("콜라")
else:
    print("잘못누르셨습니다")