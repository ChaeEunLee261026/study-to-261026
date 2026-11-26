# #퀴즈
# [파이썬 퀴즈8 - 리스트]

# 문제1)
# scores = [88, 92, 75, 64, 95, 81, 70]
# - 최고점, 최저점, 평균을 출력하세요.
# - 80점 이상인 점수만 모은 리스트를 만들어 출력하세요. (for 와 리스트 표현식 두 가지 방법)
# - 점수를 높은 순서로 정렬한 새 리스트를 출력하세요. (원본 유지)

print("1번 문제")
scores = [88, 92, 75, 64, 95, 81, 70]
# 최고점, 최저점, 평균을 출력
print("최저점:", min(scores))
print("최고점:", max(scores))
print("합계:", sum(scores))
# print("평균:", sum(scores) / len(scores))
print("평균:", round(sum(scores) / len(scores), 2)) #round로 반올림 및 소수점+2 표현
print()

# 80점 이상인 점수만 모은 리스트
scores = [88, 92, 75, 64, 95, 81, 70]
result = []
# for문
for i in scores:
    if i >= 80:
        result.append(i) #80점 이상이면 result 리스트에 추가
print("80점 이상 점수(for문):", result)
# 리스트 표현식
result = [i for i in scores if i >= 80]
print("80점 이상 점수(리스트):", result)

# 점수를 높은 순서로 정렬한 새 리스트를 출력
sorted_scores = sorted(scores, reverse=True) 
# reverse=True_리스트를 내림차순으로 정렬 / sorted_정렬해서 정렬된 리스트를 반환, 새로운 리스트 반환(원본은 그대로 유지)
print("높은 점수 순으로 출력", sorted_scores)
print()
# --------------
# 문제2)
# 공백으로 구분된 단어들을 입력 받아서
# - 단어 개수
# - 가장 긴 단어
# - 길이가 5 이상인 단어만 대문자로 바꾼 리스트를 출력하세요.

print("2번 문제")
words = input("단어를 입력하세요: ").split() #split()은 공백을 기준으로 문자열을 나눠서 리스트로 만들어줌

print("단어 개수:", len(words)) #len(words) : 리스트 안에 들어 있는 단어의 개수

longest = max(words, key=len)
print("가장 긴 단어:", longest)

# 길이가 5 이상인 단어만 대문자로 변환
result = []
for word in words:
    if len(word) >= 5:
        result.append(word.upper()) #upper 소문자를 대문자로 변환
print("5글자 이상 대문자:", result)
print()
# --------------
# 문제3)
# 장바구니 프로그램
# cart = []
# 'add 상품명' 을 입력하면 추가, 'del 상품명' 을 입력하면 삭제, 'q' 입력시 종료
# 종료할 때 장바구니 목록을 번호와 함께 출력하세요.

# +옵션1) 이미 있는 상품을 add 하면 '이미 담긴 상품' 출력
# +옵션2) 없는 상품을 del 하면 '없는 상품' 출력

print("3번 문제") #사용자가 q를 입력할 때까지 계속 명령어를 입력받아야 하므로 while을 사용
cart = [] 
while True:
    command = input("상품명 입력: ") 
    
    if command == "q": #'q' 입력시 종료
        break
    parts = command.split() #명령어 나누기
    
    if len(parts) != 2: #오류 방지 코드?
        print("명령어와 상품명을 함께 입력하세요.")
        continue

    action = parts[0] #명령어와 상품명 저장
    item = parts[1]

    # 상품추가
    if action == "add":
        if item in cart:
            print("이미 담긴 상품입니다.")
        else:
            cart.append(item)
            print(item, "을(를) 장바구니에 추가했습니다.")
    # 상품삭제
    elif action == "del":
        if item in cart:
            cart.remove(item)
            print(item, "을(를) 장바구니에서 삭제했습니다.")
        else:
            print("없는 상품입니다.")

    # 그 외 잘못된 접근?
    else:
        print("잘못된 접근입니다.")

# 반복문 종료 후 장바구니 출력
print()
print("최종 장바구니 목록")

for i in range(len(cart)):
    print(i + 1, ".", cart[i])

print("프로그램을 종료합니다!")