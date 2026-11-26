# 리스트 조작
a = [10, 20, 30]
a.append(40) #뒤에 값 추가
print(a)

# 함수 메소드
# 특정 객체에 속한 함수 : 메소드

a.append( [100, 200] ) #리스트안에 리스트를 표현_중첩
print(a)
print(a[4])
print(a[4][0])
print(a[4][1])

print(len(a)) #리스트의 길이 / [10, 20, 30, 40, [100, 200]]

b = [1,2,3]
# b.append([4,5])
b = [1,2,3] + [4,5] #이렇게도 연결 가능
print(b)

# extend : 리스트를 연결해서 확장
b.extend([6,7,8])
print(b)

# insert : 특정위치에 추가 
c = [10,20,30]
c.insert(1,500)
print(c)

c.insert(0, 100)        #앞에 추가
c.insert(len(c), 900)   #뒤에 추가
print(c)

# pop : 리스트 요소 삭제
d = [10, 20, 30]
print(d)
print(d.pop()) #제일 뒤에 요소를 삭제하면서 반환
print(d)
print(d.pop(0)) #pop(index) 제일 앞 요소 삭제하면서 반환
print(d)

# 값으로 요소 삭제
e = [10,20,30,40,20]
e.remove(30) #remove는 값을 찾아서 삭제
print(e)
# e.remove(50) 리스트 없는값을 삭제하면 오류
e.remove(20) 
print(e)

# 검색
e = [10,20,30,40,20]
print(e.index(30)) #해당값이 위치한 인덱스를 반환
# print(e.index(50)) 리스트 없는값을 찾으면 오류
print(e.count(20)) #해당 값의 개수를 찾을 수 있음

# reverse : 값 뒤집기
e.reverse()
print(e)

# sort : 정렬
e.sort() #리스트를 오름차순으로 정렬
print(e)
e = [1,6,3,67,8,9,10]
e.sort(reverse=True) #리스트를 내림차순으로 정렬 / 기본은 오름차순 False로 되어 있어서 딱히 정의 x
print(e)

# sorted vs sort()
q = [7,9,1,2,3,5,8,6]
# sort() 리스트를 그대로 정렬
w = sorted(q) #정렬해서 정렬된 리스트를 반환, 새로운 리스트 반환(원본은 그대로 유지)
print(q)
print(w)
e = sorted(q, reverse=True)
print(e)
q.sort() #원본반영
print(q)

print(sorted(q, reverse=True))
print(e.sort()) #None e.sort()는 내부적으로 정렬을 할뿐, 반환이 없음
print(e)

# clear : 모든 요소 삭제
e.clear()
print(e) #빈 리스트 상태 []

# 리스트 복사
a = [1,2,3,4] #참조타입변수 주소
b = a         #실제 복사가 일어난건 x

print(a == b)
print(a is b)

a[0] = 99     #a,b둘다 바뀐것으로 보임
print(a)
print(b)

a = [1,2,3,4]
b = a.copy()
c = a[:]
d = a[::-1]

print(a == b)
print(a is b)

a[0] = 99
print(a,b,c,d)


