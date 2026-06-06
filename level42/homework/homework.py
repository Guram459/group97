# homework 1

def add_numbers():
    print(str(2 + 2))

add_numbers()

# homework 2

def avarage(*numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)

print(avarage(1, 20, 100))


