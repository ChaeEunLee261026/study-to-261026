
print("basic01.py")

# 앞에#를 붙이면 그 라인은 주석처리 됨
# 여러줄 주석은 ''' 내용 ''' 

print("hello") #뒤에 샵부터 다시 주석

#python은 세미콜론 안붙여도 딱히 오류나지 않음
print("hello1")
print("hello2")
print("hello3")
print("hello4"); print("hello5") #한줄에 여러문장 사용시엔 ;사용

#python은 구역범위를 나타낼때 사용하던{} 대신에 들여쓰기를 사용
# 들여쓰기는 Tab눌러서 적용(공백4칸)

print("들여쓰기")
    # print("들여쓰기2") 의미없이 들여쓰기 작동x

x = 10
print(x)
if x == 10:
    print("x는 10")
    print("들여쓰기 내부 범위")
    # if문 내부에 속한 코드 블록
print("여기는 if문 밖")

# 코드블록
if x > 5:
    print('5보다 크다')
    if x > 8:
        print('8보다 크다')
    print('x>5 블록')

    if x > 100:
        pass #if문 블록안에 아무것도 없으면 에러가 나기때문에, pass라는 키워드로 자리 채워두기

print("if문 다음")