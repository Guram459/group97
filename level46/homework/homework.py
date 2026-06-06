# homework 1

def exule():
    count = []
    
    for i in range(1, 101):
        if i % 3 == 0 or i % 5 == 0:
            count.append(i)
    return count
    
results = exule()
print("number total: ", results)

# homework 2

N = int(input("შეიყვანე რიცხვი N: "))

for num in range(2, N + 1):
    for i in range(2, num):
        if num % i == 0:
            break  
    else:
        print(num)  

# homework 3

for i in range(51, 151):
    if i % 2 == 0:
        print("this number is even: ", i)
    else:
        print("this number is odd: ", i)


# homework 4

def enter_name():
    list = []

    for i in range(5):
        inp = input("enter ur username: ")
        list.append(inp)
    print("you eneter this users: ")
    for i in list:
        print(i)

enter_name()



    