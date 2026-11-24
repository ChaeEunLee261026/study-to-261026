# 슬라이스
# [시작인덱스:끝인덱스:증가폭]
#           exclusive
l = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

print(l[0:4])
print(l[2:7])
print(l)
print(l[0:len(l)])

print(l[0:len(l):2])
print(l[0:10:3])

print(l[-7:-2])
print(l[0:-2])

# 인덱스 생략
print(l[:7]) #처음부터~6까지
print(l[3:]) #3인덱스부터~끝까지
print(l[:]) #전체
l2 = l #얇은복사
l2 = l [:] #깊은복사

print(l[::2]) #처음부터 끝까지 2씩 증가
print(l[:: -1]) #순서를 거꾸로 되집는 용도로 사용

# 튜플, range, str 슬라이스
t = (1,2,3,4,5)
print(t[0:3])
print(list(range(10)[3:7]) )

s = "Hello, world!"
print(s[0:5])
print(s[5:])
print(s[::-1]) #문자열 뒤집기

jumin = '991201-1234567'
print(jumin[0:6]) # 주민번호 앞자리
print(jumin[7:]) # 뒷자리 print(jumin[-7:]) 값 동일
print(jumin[7]) # 성별숫자

# 슬라이스 활용 값 바꾸기
a = [10, 20, 30, 40, 50]
a[1:3] = ['a', 'b']
print(a)

a[1:3] = ['x']
print(a)

a = a + [60, 70, 80]
print(a)
a.append(90) #append는 뒤에 내용 추가
print(a)

del a[0]
print(a)
del a[1:4]
print(a)

