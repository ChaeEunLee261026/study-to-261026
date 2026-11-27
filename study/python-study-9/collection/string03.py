# 문자열 포맷
name = "홍길동"
age = 25
height = 175.3456

# 1. 포맷서식 %표기
print('이름: %s' % name) # %s에 name값 부여
print('나이: %d세' % age)
print('키: %fcm' % height)
print('키: %.2fcm' % height) # %.2f 소숫점2자리까지 표현
print('이름: %s 나이: %d세 키: %.2fcm' % (name, age, height))

print('이름: %10s' % name) #오른쪽정렬 10칸 확보
print('이름: %-10s' % name) #왼쪽정렬 10칸 확보

# 2. format 메소드
print('이름: {} 나이: {}세 키: {}cm'.format(name, age, height))
print('이름: {0} 나이: {1}세 키: {2}cm {0}'.format(name, age, height))

print('이름: {name} 나이: {age}세 키: {abc}cm'.format(name=name, age=age, abc=height))
print('키: {:.2f}cm'.format(height) )

# 3. f-string f'{name}'
print(f'이름:{name} 나이{age}')
print(f'이름:{name.strip()} 나이{age+1}')

print(f'{height}')
print(f'{height:.2f}')
print(f'{height:.1f}')
print(f'{height:10.2f}cm') #10칸 차지하는데 소수젓음 2번째 자리까지
print(f'{height:<10.2f}cm') #왼쪽정렬<
print(f'{height:>10.2f}cm') #오른쪽정렬>
print(f'{height:^10.2f}cm') #가운데정렬^
print(f'{height:*^10.2f}cm') #10칸 차지하는데 가운데 정렬 및 공백은 *표시
print(f'{height:->10.2f}cm') #오른쪽정렬하면서 공백은-표시

print(f'{age:05d}')
print(f'{4:02d}월 {9:02d}일') #04월 09일

# 돈 출력시 단위마다 . 찍기
price = 1388402800
print(f'{price:,}원')
print('{:,}'.format(price))

# 퍼센트
rate = 0.8765
print(f'{rate:.1%}')
print(f'{rate*100}%')
print(f'{rate*100:.2f}%')

products = [['노트북', 1250000,2], ['마우스', 25000, 5], ['키보드', 89000, 3]]
print(f'{"상품":<8}{"가격":>10}{"수량":>5}{"총금액":>12}')
print('-'*50)
for title, price, qty in products:
    print(f'{title:<8}{price:>10,}{qty:>8}{price*qty:>18,}')
