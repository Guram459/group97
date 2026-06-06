# homework 1

def remove_every_other(my_list):
    result = []

    for index in range(len(my_list)):
        if index % 2 == 0:
            result.append(my_list[index])
    return result

# homework 2

def count_sheeps(sheep):
    return sheep.count(True)

# homework 3

def unusual_five():
    trick = "trick"
    
    return len(trick)

# homework 4

def bool_to_word(boolean):
    if boolean:
        return "Yes"
    else:
        return "No"
    
# homework 5

def quarter_of(month):
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    elif 10 <= month <= 12:
        return 4
    
# homework 6

def greet():
    return "hello world!"