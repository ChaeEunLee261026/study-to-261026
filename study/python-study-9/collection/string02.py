# replace : 문자 바꾸기(대체하기) / replace(대상, 바꿀값)

s = "hello, world!"
print(s.replace("World", "Good")) #원본은 유지_비파괴적
print(s)

s.replace("World", "Good")  #값을 다시 S에 저장
print(s)

# 분리(split) / 합치기(join)
# 분리(split)
words = 'apple kiwi banana melon'.split()
print(words)
print('apple kiwi banana melon'.split(','))
# 합치기(join) / 구분자.join(리스트)
print("-".join(words)) #apple-kiwi-banana-melon
print("/".join(words)) #apple/kiwi/banana/melon
print("".join(words)) #applekiwibananamelon

# 대소문자
print('hello'.upper()) #대문자 변환 HELLO
print('GREAT'.lower()) #소문자 변환 great
print('hello great'.title()) #첫번째 문자를 대문자로
print('hello great'.capitalize()) 

# 공백제거(입력값 정리)
text = ' wonderful '
print('[', text, ']')
print('[', text.strip(), ']') #strip 양쪽에 있는 불편한것들을 지움
print('[', text.lstrip(), ']')
print('[', text.rstrip(), ']')
print('[', ". this is text!!  ".strip('.!'), ']') #양쪽 끝에있는 지정한 문자를 정리

# 문자열 폭 정렬
print('[', 'python'.ljust(10) ,']')     #[ python     ]
print('[', 'python'.rjust(10) ,']')     #[     python ]
print('[', 'python'.center(10) ,']')    #[   python   ]
print('[', 'python'.zfill(10) ,']')     #[ 0000python ]
print( '2'.zfill(2))                    #02
print('[', 'python'.ljust(10, '*'),']') #[ python**** ]

# 문자찾기
s = 'apple pineapple'
print(s.find('pl')) #앞에서부터 찾아서 가장먼저 찾은 위치
print(s.rfind('pl')) #오른쪽에서부 찾기
print(s.find('ex')) #찾는값이 없으면 -1
print(s.index('pl')) #찾은 인덱스
# print(s.index('ex')) #찾는값을 못찾으면 오류남
print(s.count('p')) #갯수세기

# 시작 끝 확인
file_name = 'report.xisx' #파일 확장자명 ex) .xlsx .png .hwpx
print(file_name.startswith('report'))
print(file_name.endswith('.xlsx'))
print(file_name.endswith('.pptx'))

# 문자타입 종류 판단
print('1234'.isdigit())
print(int('1234'))
print('12q34'.isdigit()) #숫자형태가 아님
# print(int('12q34')) #오류남

print('1234'.isalpha())
print('abcd'.isalpha())

print('abcd'.isalnum())
print('1234'.isalnum())
print('1234abcd!@#$'.isalnum()) #pw입력시 숫자, 영문 검증시에도 많이 씀

# 메소드 체이닝(이어붙여서 수행)
raw = ' Hello, Python '
raw = raw.strip()
raw = raw.lower()
raw = raw.replace('python', 'World')
print(raw)

raw2 = ' Hello, Python '
raw2 = raw2.strip().lower().replace('python', 'World')
print(raw2)

# 입력 한번에 정리
email = input("이메일: ").strip().lower() #공백제거, 소문자로
print(email)
user_id, domain = email.split("@")
print(user_id, domain)


