# 리스트 조작
a = [30,20,50,60,10]
for i in range(len(a)):
    print(a[i], end=" ")
print()

for v in a:
    print(v, end=" ")
print()

for idx, value in enumerate(a):
    print(idx, value)
print()

i = 0
while i < len(a):
    print(a[i], end=" ")
    i = i + 1
print()

# 최소값, 최대값
smallest = a[0]
for v in a:
    if v <= smallest:
        smallest = v
print("최소값", smallest)

largest = a[0]
for v in a:
    if v >= largest:
        largest = v
print("최대값", largest)

# 함수 min max sum
print(min(a), max(a), sum(a))
# 평균_총합/갯수
print(sum(a) / len(a))

# 리스트 표현식(리스트 컴프리핸션)
# [식 for 변수 in 반복이 가능한 객체]
b = [i for i in range(10)]
print(b)
# 위에 명령문 = 아래 명령문 동일 결과물
b = []
for i in range(10):
    b.append(i)
print(b)

c = [i*10 for i in range(1,11)]
print(c)

c = []
for i in range(1,11):
    c.append(i*10)
print(c)

# 조건붙이기 추가
# [식 for 변수 in 반복이 가능한 객체 + if 조건]
d = [i for i in range(10) if i % 2 == 0]
print(d)
# 풀어서 쓰면 아래와 같음
d = []
for i in range(10):
    if i %2 == 0:
        d.append(i)
print(d)


e = [i+5 for i in range(10) if i%2 == 1]
print(e)

# words : 문자열 리스트
words = ['apple', 'banana', 'kiwi']
# 단어를 대,소문자 바꾸기 / upper : 대문자, lower : 소문자
print(words[0].upper() )

words_upper = [v.upper() for v in words] #모든 요소 다 대문자 변환
print(words_upper)

words_len = [len(v) for v in words] #문자길이
print(words_len)

# map 모든 요소들에게 같은 함수 적용
words_len2 = list(map(len, words))
print(words_len2)

a = [1.1, 2.2, 3.3, 4.4]
b = list(map(int, a)) #실수형 숫자 int(1.1) → 1로 변환
print(b)

nums = list(map(str, range(5))) #문자로 출력
nums2 = list(range(5))          #숫자로 출력
print(nums)
print(nums2)

# 입력값 split → map 적용
x = list(map(int, input("숫자 여러개 띄어쓰기로 입력:").split()))
print(x)

# 튜플
t = (30,20,50,60,10,40)
print(t.count(50), t.index(30))
print(min(t), max(t), sum(t))
t_even = tuple(i for i in range(10) if i%2 == 0)
print(t_even)