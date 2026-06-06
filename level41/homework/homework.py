# homework 1

def basic_op(o, v1, v2):
    if o == "+":
        return v1 + v2
    elif o == "-":
        return v1 - v2
    elif o == "*":
        return v1 * v2
    elif o == "/":
        return v1 / v2
    

# homework 2

def check_for_factor(base, factor):
    return base % factor == 0

# homework 3

def find_avrage(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)

# homework 4

a = "code"
b = "wa.rs"
name = a + b



