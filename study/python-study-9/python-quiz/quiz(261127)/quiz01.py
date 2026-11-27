# #퀴즈
# [파이썬 퀴즈9 - 2차원 리스트]
             #국어 영어 수학
scores = [#0 1 2 3
    ['김철수', 90, 85, 77], #0
    ['이영희', 72, 95, 88], #1
    ['박민수', 65, 70, 92], #2
    ['최지우', 98, 89, 94], #3
]
# (이름, 국어, 영어, 수학)

# 문제1) 가로 &평균
# 학생별 총점과 평균을 출력하세요.
# 출력 예) 김철수 총점 252 평균 84.0

print("1번 문제")
# 김철수
# total = sum(scores[0][1:4])
# average = total/3
# print("김철수 총점:", total, "김철수 평균:", average)

for student in scores:
    total = sum(student[1:4])
    average = total / 3

    print(student[0], "총점:", total, "평균:", round(average, 1))
print('-'*50)

'''
참고수식_선생님 답안
for row in socres:
    total = row[1] + row[2] +row[3] OR total = sum(row[1:])  #총점 
    avg = total / 3 #평균
    print(row[0], "총점:", total, "평균:", avg)
'''
# --------------
# 문제2) 세로 평균
# 과목별(국어, 영어, 수학) 평균을 출력하세요.

print("2번 문제")
subjects = ["국어", "영어", "수학"]

for i in range(1,4):
    total_2 = 0

    for student in scores:
        total_2 += student[i]
    average = total_2 / len(scores)
    print(subjects[i-1], "과목별 평균:", round(average, 1))
print('-'*50)
'''
참고수식_선생님 답안
kor_total = 0
eng_total = 0
math_totl = 0

for row in scores:
    kor_total += row[1]
    eng_total += row[2]
    math_totl += row[3]

print("국어평균", kor_total/len(scores) )
print("영어평균", eng_total/len(scores) )
print("수학평균", math_totl/len(scores) )
'''
# --------------
# 문제3)
# 총점이 가장 높은 학생의 이름을 출력하세요.

print("3번 문제")
result = sorted(scores, key=lambda s: sum(s[1:4]), reverse=True)
# 특정 위치의 열을 기준으로 정렬 / 한줄로 간단하게 작성하는 함수
print("총점이 가장 높은 학생:", result[0][0])
print('-'*50)
'''
참고수식_선생님 답안
largest = 0
largest_name = ''

for row in scores:
    total = sum(row[1:]) #점수만 더하기
    if total >= largest:
        largest = total
        leargest_name = row[0] #이름
print("제일 높은 총점:", largest, "1등:", largest_name)
OR
totals = [sum(row[1:]) for row in scores]
print(totlas)

max_total = max(totlas)
idx_max_total = totals.index(max_total)
print(scores[idx_max_total][0], "1등인 사람")
'''
# --------------
# 문제4)
# 3행 4열 2차원 리스트를 만들고 아래처럼 1부터 순서대로 채워서 출력하세요.
#(0 1 2 3)
# 1 2 3 4       / 0
# 5 6 7 8       / 1
# 9 10 11 12    /2

print("4번 문제")
table = []
num = 1

# table[i][j] = num
# num += 1

for i in range(3):
    row = []
    for j in range(4):
        row.append(num)
        num+= 1
    table.append(row)
print(table)
print()
# OR 
table = []
for i in range(3):
    row = []
    for j in range(4):
        row.append(i*4 + (j+1))
    table.append(row)
print(table)
print()
# OR 
table2 = [[i*4 + (j+1) for j in range(4)] for i in range(3)]
print(table2)
