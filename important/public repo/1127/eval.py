# open() 파일을 열어 파일 객체를 돌려줌 (모드: 'r' 읽기, 'w' 쓰기, 'a' 추가)
# with ~ as 블록이 끝나면 파일을 자동으로 닫아줌


# with open('order.txt', 'r', encoding='utf-8') as f:
#     for line in f:


# f = open('order.txt', 'r', encoding='utf-8')
# f.readlines()
# f.close()

total_price = 0
# 조건1
with open('order.txt', 'r', encoding='utf-8') as f:
    for line in f:
        # print(line)
        data = line.split(',')

# 조건3(조건 2,3 순서 바꿔서 진행;;)
        product = data[0].strip()
        count = data[1].strip()
        price = data[2].strip()
        price = price.replace('원', '')

        count = int(count)
        price = int(price)
        # print(product, count, price)
        # print(type(count), type(price))

# 조건2
        if price < 0 or price > 10000 or count < 0:
            # print('ex:', product, count, price)
            continue
          
# # 조건3
#         product = data[0].strip()
#         count = data[1].strip()
#         price = data[2].strip()
#         price = price.replace('원', '')

#         count = int(count)
#         price = int(price)

# 조건4
        total_price += count * price
print('전체 매출:', total_price, '원') 


