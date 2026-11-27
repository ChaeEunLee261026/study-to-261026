# 리스트 중첩
# 2차원 리스트

# 2차원 행, 열
a = [#0  1
    [10,20], #0 인덱스
    [30,40], #1
    [50,60]  #2
    ]
print(a)
print(a[1][0])
print(a[2][1])
print(a[0][1])

a[0][1] = 99
print(a)

b = [#0  1
    [10,20], #0 인덱스
    [30,40], #1
    [50,60]  #2
    ]
# 반복문으로 2차원 리스트 출력

# 동일결과 / 명령문만 상이
for i in range(len(b)): #3(len) / 0 1 2 
    for j in range(len(b[i])): 
        print(b[i][j], end=" ")
    print()
print('-'*50)
# 1번
for row in b : 
    for v in row:
        print(v, end=" ")
    print()
print('-'*50)
# 2번
for x, y in b:
    print(x,y)
print('-'*50)
# 3번

# 2차원 리스트 생성
# [ [],[],[] ] / 리스트 안에 리스트, 리스트를 추가
c = []
for i in range(3):
    temp = []
    for j in range(2):
        temp.append(j)
    # temp = [0, 1]
    c.append(temp)
print(c)
# 위아래 동일결과 / 명령문만 상이
e = [[j for j in range(2)]for i in range(3)]
print(e)

# ---
d = [i for i in range(3)]
print(d)

f = [[0] * 5 for i in range(3)]
print(f)

# 학생들       이름    학점   나이
students = [ ["john", 'C', 19], ['maraia', 'A', 25], ['andrew', 'B', 7]]
print(sorted(students))
print(sorted(students, reverse=True))
# 특정 위치의 열을 기준으로 정렬 / 한줄로 간단하게 작성하는 함수
print(sorted(students, key=lambda s: s[1])) #학점기준 정렬
print(sorted(students, key=lambda s: s[2])) #나이순 정렬

# 2차원 리스트 복사
a = [[10,20], [30,40]]
b = a
print(a,b)
a[0][0] = 99
print(a,b)
print('-'*50)

a = [[10,20], [30,40]]
b = a.copy()

print(a,b)
a[0][0] = 99
print(a,b)

import copy
print('-'*50)
a = [[10,20], [30,40]]
b = copy.deepcopy(a)

print(a,b)
a[0][0] = 99
print(a,b)