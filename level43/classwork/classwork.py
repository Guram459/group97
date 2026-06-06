# classwork 1

def get_grade(s1, s2, s3):
    avrage = (s1 + s2 + s3) /3

    if avrage >= 90:
        return 'A'
    elif avrage >= 80:
        return 'B'
    elif avrage >= 70:
        return 'C'
    elif avrage >= 60:
        return 'F'
    
# classwork 2

def remove_exclmation_marks(s):
    return s.replace('!', '')

# classwork 3

def no_space(x):
    return x.replace(" ", "")

