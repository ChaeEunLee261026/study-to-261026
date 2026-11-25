# [파이썬 퀴즈3 - 딕셔너리]

# 문제1)
# 아래 정보를 저장하는 딕셔너리 student 를 만드세요.
# 이름: 김파이, 학년: 2, 전공: 컴퓨터공학, 점수: [90, 85, 77]
# - 이름과 전공을 출력하세요.
# - 점수 중 두 번째 점수를 출력하세요.
# - 학년을 3으로 변경하고, 'email' 키에 'kim@py.com' 을 추가한 뒤 출력하세요.
studentName = "김파이"
studentClass = 2
studentMajor = "컴퓨터공학"
studentScore = 90, 85, 77
print("1번 문제")
print(studentName, studentMajor ) #이름과 전공 출력
print(studentScore[1]) #점수 중 두 번째 점수 출력
studentClass = 3 #학년을 3으로 변경
studentEmail = "kim@py.com" #이메일 추가
print(str(studentClass) + "학년" + studentEmail )
print()

# 문제2)
# keys = ['alpha', 'bravo', 'charlie', 'delta']
# values = [10, 20, 30, 40]
# 두 리스트로 딕셔너리를 만들고 'delta' 의 값을 출력하세요.
# (두 개의 리스트에 각각 들어 있는 데이터를 서로 연결해서 하나의 딕셔너리로
# 즉, 두 리스트에서 같은 순서에 있는 값끼리 짝을 지어 주는 거)
keys = ['alpha', 'bravo', 'charlie', 'delta']
        # 0         1          2       3
values = [10, 20, 30, 40]
#          0   1   2   3
dict = {'alpha' : 10, 'bravo' : 20, 'charlie' : 30, 'delta' : 40} #하나의 딕셔너리
print("2번 문제")
print(dict['delta'])
print()


# 문제3)
# camille = {'health': 575.6, 'health_regen': 1.7, 'mana': 338.8,
#            'mana_regen': 1.63, 'melee': 125, 'attack_damage': 60,
#            'attack_speed': 0.625, 'armor': 26, 'magic_resistance': 32.1,
#            'movement_speed': 340}
# 키 이름을 입력 받아서 해당 값을 출력하세요.
# 없는 키를 입력하면 '없는 항목' 이라고 출력하세요. (if 없이 get 사용)
camille = {'health': 575.6, 'health_regen': 1.7, 'mana': 338.8,
           'mana_regen': 1.63, 'melee': 125, 'attack_damage': 60,
           'attack_speed': 0.625, 'armor': 26, 'magic_resistance': 32.1,
           'movement_speed': 340}
print("3번 문제")
key = input("키 이름을 입력하세요: ")  #키 이름값 출력
# print(camille.get(key)) #해당 값 출력
print(camille.get(key, "없는항목")) #없는 키를 입력하면 '없는 항목' 이라고 출력 

